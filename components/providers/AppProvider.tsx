'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { StreamMessage, AIChatMessage, Project } from '@/lib/types'
import { projects as seedProjects } from '@/lib/data'

type AppState = {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  stream: StreamMessage[]
  addStream: (m: Omit<StreamMessage,'id'|'createdAt'>) => void
  clearStream: () => void
  markAllRead: () => void
  visitors: number
  bumpVisitor: () => void
  selectedProject: Project | null
  setSelectedProject: (p: Project | null) => void
  openModal: string | null
  setOpenModal: (m: string | null) => void
  streamOpen: boolean
  setStreamOpen: (o:boolean)=>void
  musicOpen: boolean
  setMusicOpen: (o:boolean)=>void
  aiMessages: AIChatMessage[]
  pushAI: (role:'user'|'assistant', content:string)=>void
  adminAuthed: boolean
  setAdminAuthed: (v:boolean)=>void
}

const Ctx = createContext<AppState | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark'|'light'>('dark')
  const [stream, setStream] = useState<StreamMessage[]>([])
  const [visitors, setVisitors] = useState(1247)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [openModal, setOpenModal] = useState<string | null>(null)
  const [streamOpen, setStreamOpen] = useState(false)
  const [musicOpen, setMusicOpen] = useState(false)
  const [aiMessages, setAiMessages] = useState<AIChatMessage[]>([
    { id:'m0', role:'assistant', content:"Hi! I'm FrankAI. Ask me about Frank's projects, tech stack, security, or contact options.", ts: Date.now() }
  ])
  const [adminAuthed, setAdminAuthed] = useState(false)

  useEffect(()=> {
    const savedV = Number(localStorage.getItem('fp_visitors') || 1247)
    setVisitors(savedV)
    const savedStream = localStorage.getItem('fp_stream')
    if(savedStream){ try{ setStream(JSON.parse(savedStream)) } catch{} }
    // eslint-disable-next-line
  }, [])

  useEffect(()=> {
    document.body.classList.toggle('light-theme', theme==='light')
  }, [theme])

  const toggleTheme = () => setTheme(t => t==='dark'?'light':'dark')

  const addStream = (m: Omit<StreamMessage,'id'|'createdAt'>) => {
    const item: StreamMessage = { ...m, id: Math.random().toString(36).slice(2), createdAt: new Date().toISOString() }
    setStream(s => {
      const ns = [item, ...s].slice(0,120)
      localStorage.setItem('fp_stream', JSON.stringify(ns))
      return ns
    })
  }
  const clearStream = () => { setStream([]); localStorage.removeItem('fp_stream') }
  const markAllRead = () => setStream(s=>s.map(x=>({...x, read:true})))

  const bumpVisitor = () => {
    setVisitors(v=>{
      const nv=v+1
      localStorage.setItem('fp_visitors', String(nv))
      return nv
    })
  }

  const pushAI = (role:'user'|'assistant', content:string) => {
    setAiMessages(m=> [...m, { id: Math.random().toString(36).slice(2), role, content, ts: Date.now() }])
  }

  // initial system message
  useEffect(()=>{
    if(stream.length===0){
      addStream({ type:'system', author:'System', body:'🟢 System Stream14 – connected. Welcome to FrankPort!' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Ctx.Provider value={{
    theme, toggleTheme,
    stream, addStream, clearStream, markAllRead,
    visitors, bumpVisitor,
    selectedProject, setSelectedProject,
    openModal, setOpenModal,
    streamOpen, setStreamOpen,
    musicOpen, setMusicOpen,
    aiMessages, pushAI,
    adminAuthed, setAdminAuthed
  }}>{children}</Ctx.Provider>
}

export const useApp = () => {
  const c = useContext(Ctx)
  if(!c) throw new Error('useApp outside provider')
  return c
}
