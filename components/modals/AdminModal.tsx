'use client'
import { useApp } from '@/components/providers/AppProvider'
import { useToast } from '@/components/providers/ToastProvider'
import { useState, useEffect } from 'react'

export function AdminModal(){
  const { openModal, setOpenModal, adminAuthed, setAdminAuthed, addStream } = useApp()
  const open = openModal === 'admin'
  const { toast } = useToast()
  const [pass,setPass]=useState('')
  const [rec,setRec]=useState('')
  const [showRec,setShowRec]=useState(false)
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [stats,setStats]=useState({contacts:0, feedback:0, reports:0, visitors:1122})

  useEffect(()=>{
    if(adminAuthed){
      fetch('/api/admin/stats').then(r=>r.json()).then(setStats).catch(()=>{})
    }
  }, [adminAuthed])

  const signIn = async (e:React.FormEvent)=>{
    e.preventDefault()
    const r = await fetch('/api/admin/login', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ password: pass, recoveryKey: rec })})
    if(r.ok){ setAdminAuthed(true); toast('Admin authenticated'); addStream({type:'admin', author:'Admin Frank', body:'🔐 Admin Frank signed in'}) }
    else toast('Invalid password. Try frank2025')
  }

  const postMsg = async ()=>{
    if(!title||!body){toast('Add title & content');return}
    await fetch('/api/admin/message', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title, body})})
    addStream({type:'admin', author:'Admin Frank', title, body})
    toast('Message posted to System Stream')
    setTitle(''); setBody('')
  }

  if(!open) return <div className={`modal ${open?'open':''}`} aria-hidden="true" />
  return (
    <div className={`modal ${open?'open':''}`}>
      <div className="modal-bg" onClick={()=>setOpenModal(null)} />
      <div className="modal-box" style={{maxWidth:720}}>
        <button className="close-x" onClick={()=>setOpenModal(null)}>×</button>
        {!adminAuthed ? (
          <>
            <h3 style={{marginBottom:4}}>Admin Access</h3>
            <p className="muted" style={{fontSize:13, marginBottom:16}}>Secure authentication required</p>
            <form onSubmit={signIn} style={{display:'grid', gap:12}}>
              <input type="password" className="input" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} required />
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'12.5px', flexWrap:'wrap', gap:8}}>
                <button type="button" className="muted" style={{background:'none', border:0, color:'#9abde0', cursor:'pointer'}} onClick={()=>setShowRec(s=>!s)}>
                  Forgot password? Use recovery key
                </button>
                <button className="btn btn-primary" type="submit" style={{padding:'10px 18px'}}>Sign In</button>
              </div>
            </form>
            {showRec && (
              <div style={{marginTop:14}}>
                <input className="input" placeholder="Recovery Key" value={rec} onChange={e=>setRec(e.target.value)} />
                <div style={{marginTop:8, display:'flex', gap:8}}>
                  <button className="btn btn-primary" onClick={signIn}>Recover Access</button>
                  <button className="btn btn-ghost" onClick={()=>setShowRec(false)}>Back</button>
                </div>
              </div>
            )}
            <p className="help" style={{marginTop:12}}>Demo password: <span className="kbd">frank2025</span> · recovery: <span className="kbd">FRANK-RECOVER-2025</span></p>
          </>
        ) : (
          <div>
            <h4>Dashboard Overview</h4>
            <p className="muted" style={{fontSize:13}}>Welcome back, Admin Frank</p>
            <div className="dash-stats">
              <div className="dash-stat"><b>{stats.contacts}</b><span className="muted" style={{fontSize:12}}>Total Contacts</span></div>
              <div className="dash-stat"><b>{stats.feedback}</b><span className="muted" style={{fontSize:12}}>Feedback Received</span></div>
              <div className="dash-stat"><b>{stats.reports}</b><span className="muted" style={{fontSize:12}}>Issue Reports</span></div>
              <div className="dash-stat"><b>{stats.visitors}</b><span className="muted" style={{fontSize:12}}>Visitor Proofs</span></div>
            </div>
            <div style={{display:'flex', gap:8, flexWrap:'wrap', margin:'8px 0 14px'}}>
              <button className="pill active">Post Message</button>
              <button className="pill" onClick={()=>toast('Viewing contacts…')}>View Contacts</button>
              <button className="pill" onClick={()=>toast('Checking feedback…')}>Check Feedback</button>
              <button className="pill" onClick={()=>toast('Settings saved')}>Settings</button>
            </div>
            <div className="glass-card" style={{padding:16}}>
              <strong>Admin Messages</strong>
              <input className="input" placeholder="Message Title" style={{margin:'10px 0 8px'}} value={title} onChange={e=>setTitle(e.target.value)} />
              <textarea placeholder="Message Content" style={{minHeight:90}} value={body} onChange={e=>setBody(e.target.value)} />
              <div style={{textAlign:'right', marginTop:8}}>
                <button className="btn btn-primary" onClick={postMsg}>Post Message</button>
              </div>
            </div>
            <div style={{marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
              <div>
                <strong style={{fontSize:13}}>Security</strong>
                <div className="muted" style={{fontSize:12.5, marginTop:6}}>
                  • JWT refresh rotation<br/>• Rate limiting active<br/>• 2FA ready<br/>• Last login: now
                </div>
              </div>
              <div>
                <strong style={{fontSize:13}}>Preferences</strong>
                <div className="muted" style={{fontSize:12.5, marginTop:6}}>
                  Email Notifications: ON<br/>
                  Language: EN · FR · ES · DE · ZH · RW<br/>
                  Theme: Auto
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
