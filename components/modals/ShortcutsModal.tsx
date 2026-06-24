'use client'
import { useApp } from '@/components/providers/AppProvider'

export function ShortcutsModal(){
  const { openModal, setOpenModal } = useApp()
  const open = openModal==='shortcuts'
  if(!open && openModal!=='shortcuts') return <div className={`modal ${open?'open':''}`} aria-hidden />
  return (
    <div className={`modal ${open?'open':''}`}>
      <div className="modal-bg" onClick={()=>setOpenModal(null)} />
      <div className="modal-box" style={{maxWidth:620}}>
        <button className="close-x" onClick={()=>setOpenModal(null)}>×</button>
        <h3>Keyboard Shortcuts</h3>
        <p className="muted" style={{marginBottom:14}}>Master FrankPort with these powerful shortcuts</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, fontSize:'13.5px'}}>
          <div><span className="kbd">Ctrl</span> + <span className="kbd">Shift</span> + <span className="kbd">L</span><br/><span className="muted">Toggle Light/Dark Theme</span></div>
          <div><span className="kbd">Ctrl</span> + <span className="kbd">M</span><br/><span className="muted">Toggle Music Player</span></div>
          <div><span className="kbd">Ctrl</span> + <span className="kbd">Alt</span> + <span className="kbd">L</span><br/><span className="muted">Open Language Menu</span></div>
          <div><span className="kbd">Esc</span><br/><span className="muted">Close Any Modal/Panel</span></div>
          <div><span className="kbd">?</span><br/><span className="muted">Show This Help Panel</span></div>
          <div><span className="kbd">← →</span><br/><span className="muted">Navigate Music Modal</span></div>
        </div>
        <p className="help" style={{marginTop:14}}>Pro Tips: All shortcuts work across desktop and mobile browsers. Press <span className="kbd">Esc</span> to close any open modal.</p>
      </div>
    </div>
  )
}
