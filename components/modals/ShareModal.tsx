'use client'
import { useApp } from '@/components/providers/AppProvider'
import { useToast } from '@/components/providers/ToastProvider'

export function ShareModal(){
  const { openModal, setOpenModal } = useApp()
  const open = openModal==='share'
  const { toast } = useToast()
  const copy = async ()=>{
    await navigator.clipboard.writeText('https://frankport.vercel.app')
    toast('Link copied to clipboard!')
  }
  if(!open && openModal!=='share') return <div className={`modal ${open?'open':''}`} aria-hidden />
  return (
    <div className={`modal ${open?'open':''}`}>
      <div className="modal-bg" onClick={()=>setOpenModal(null)} />
      <div className="modal-box" style={{maxWidth:520}}>
        <button className="close-x" onClick={()=>setOpenModal(null)}>×</button>
        <h3>Share FrankPort</h3>
        <p className="muted" style={{fontSize:13, marginBottom:14}}>Copy Portfolio Link — Instantly share your portfolio with clients, employers, or collaborators.</p>
        <div style={{display:'flex', gap:8}}>
          <input className="input" value="https://frankport.vercel.app" readOnly style={{flex:1}} />
          <button className="btn btn-primary" onClick={copy}>Copy</button>
        </div>
        <div style={{display:'flex', gap:10, flexWrap:'wrap', marginTop:14}}>
          <a className="pill" href="https://wa.me/?text=Check%20FrankPort%20https://frankport.vercel.app" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="pill" href="https://twitter.com/intent/tweet?url=https://frankport.vercel.app" target="_blank" rel="noreferrer">Twitter</a>
          <a className="pill" href="https://www.linkedin.com/sharing/share-offsite/?url=https://frankport.vercel.app" target="_blank" rel="noreferrer">LinkedIn</a>
          <button className="pill" onClick={copy}>Email</button>
          <button className="pill" onClick={copy}>Reddit</button>
          <button className="pill" onClick={copy}>Telegram</button>
        </div>
      </div>
    </div>
  )
}
