'use client'
import React, { createContext, useContext, useState, useCallback } from 'react'

type Toast = { id: string; message: string }
type Ctx = { toast: (msg: string) => void }

const ToastCtx = createContext<Ctx | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((message: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts(t => [...t, { id, message }])
    setTimeout(()=> setToasts(t => t.filter(x=>x.id !== id)), 3400)
  }, [])

  return (
    <ToastCtx.Provider value={{ toast }}>
      {children}
      <div id="toast-root">
        {toasts.map(t => (
          <div key={t.id} className="tst">{t.message}</div>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}

export const useToast = () => {
  const ctx = useContext(ToastCtx)
  if(!ctx) throw new Error('useToast outside provider')
  return ctx
}
