'use client'
import { useApp } from '@/components/providers/AppProvider'

export default function Footer(){
  const { setOpenModal } = useApp()
  return (
    <footer>
      <div className="container foot-inner">
        <div><strong>SamPort.</strong> <span className="muted">— Optimizing performance…</span><br/>© 2023–2026 Frank Nabasa · Kigali, Rwanda</div>
        <div className="muted">
          Built with Next.js 14 · TypeScript · App Router · Vercel<br/>
          <a href="#" onClick={e=>{e.preventDefault(); setOpenModal('shortcuts')}} style={{color:'#9dcfff'}}>Keyboard Shortcuts <span className="kbd">?</span></a> ·
          {' '}<a href="#" onClick={e=>{e.preventDefault(); setOpenModal('report')}} style={{color:'#ffb4b4'}}>Report an Issue</a>
        </div>
      </div>
    </footer>
  )
}
