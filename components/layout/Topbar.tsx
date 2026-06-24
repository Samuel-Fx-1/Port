'use client'
import { useApp } from '@/components/providers/AppProvider'
import { useToast } from '@/components/providers/ToastProvider'

export default function Topbar(){
  const { toggleTheme, theme, setStreamOpen, setOpenModal } = useApp()
  const { toast } = useToast()

  const copyLink = async () => {
    try{
      await navigator.clipboard.writeText('https://frankport.vercel.app')
      toast('Link copied to clipboard!')
    }catch{
      toast('https://frankport.vercel.app copied (manual)')
    }
  }

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <div className="logo-dot">FN</div>
          <div>
            FrankPort
            <small>Full-Stack · Kigali, RW</small>
          </div>
        </div>
        <div className="studio-pill"><i className="fa-solid fa-wand-magic-sparkles" style={{color:'#7dd3fc'}}></i> Frank Projects Studio</div>
        <div className="nav-actions">
          <button className="icon-btn" title="System Stream" onClick={()=>setStreamOpen(true)}>
            <i className="fa-regular fa-bell"></i>
          </button>
          <button className="icon-btn" title="Share" onClick={copyLink}>
            <i className="fa-solid fa-share-nodes"></i>
          </button>
          <button className="icon-btn" title="Admin Dashboard" onClick={()=>setOpenModal('admin')}>
            <i className="fa-solid fa-shield-halved"></i>
          </button>
          <button className="icon-btn" title="Toggle theme Ctrl+Shift+L" onClick={toggleTheme}>
            <i className={theme==='dark' ? 'fa-regular fa-moon' : 'fa-regular fa-sun'}></i>
          </button>
          <span className="badge-live">Live</span>
        </div>
      </div>
    </header>
  )
}
