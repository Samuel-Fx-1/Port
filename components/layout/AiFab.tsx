'use client'
import { useApp } from '@/components/providers/AppProvider'

export default function AiFab(){
  const { setOpenModal } = useApp()
  return (
    <div style={{position:'fixed', left:18, bottom:18, zIndex:260}}>
      <button onClick={()=>setOpenModal('ai')} className="btn btn-ghost" style={{borderRadius:999, padding:'10px 16px', background:'rgba(10,20,44,.82)', backdropFilter:'blur(8px)'}}>
        <i className="fa-solid fa-robot" style={{color:'#6ef1d7', marginRight:8}}></i> Ask Frank AI
      </button>
    </div>
  )
}
