'use client'
import { useApp } from '@/components/providers/AppProvider'
import { useState, useEffect, useRef } from 'react'

export function AiModal(){
  const { openModal, setOpenModal, aiMessages, pushAI } = useApp()
  const open = openModal==='ai'
  const [input,setInput]=useState('')
  const [loading,setLoading]=useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{ if(boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight }, [aiMessages, open])

  const ask = async (q?:string)=>{
    const query = (q ?? input).trim()
    if(!query) return
    pushAI('user', query)
    setInput('')
    setLoading(true)
    try{
      const res = await fetch('/api/ai', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ message: query })})
      const data = await res.json()
      pushAI('assistant', data.answer || 'Sorry, I failed.')
    } catch{
      pushAI('assistant', 'Network error.')
    }
    setLoading(false)
  }

  if(!open && openModal!=='ai') return <div className={`modal ${open?'open':''}`} aria-hidden />
  return (
    <div className={`modal ${open?'open':''}`}>
      <div className="modal-bg" onClick={()=>setOpenModal(null)} />
      <div className="modal-box" style={{maxWidth:680}}>
        <button className="close-x" onClick={()=>setOpenModal(null)}>×</button>
        <h3>Meet FrankAI</h3>
        <p className="muted">Your Intelligent Assistant — built into the FrankPort ecosystem</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, margin:'14px 0', fontSize:13, color:'#a9c4e4'}}>
          <div>⚡ Instant Answers</div><div>💬 Smart Conversations</div>
          <div>📚 Always Learning</div><div>🛡️ 24/7 Available</div>
        </div>
        <div className="ai-chat" ref={boxRef}>
          {aiMessages.map(m=>(
            <div key={m.id} className="ai-msg">
              <b style={{color: m.role==='user' ? '#7dd3fc' : '#9cf7d6'}}>{m.role==='user'?'You':'FrankAI'}:</b> {m.content}
            </div>
          ))}
          {loading && <div className="muted">FrankAI is thinking…</div>}
        </div>
        <div style={{display:'flex', gap:8, marginTop:10, flexWrap:'wrap'}}>
          {['Show your best projects','Your main tech stack?','Got any AI builds?','How do you secure apps?','Share your toughest project','Ways to contact you?'].map(q=>(
            <button key={q} className="pill" onClick={()=>ask(q)}>{q}</button>
          ))}
        </div>
        <div style={{display:'flex', gap:8, marginTop:10}}>
          <input className="input" placeholder="Ask FrankAI anything…" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter') ask()}} />
          <button className="btn btn-primary" onClick={()=>ask()} disabled={loading}>Send</button>
        </div>
      </div>
    </div>
  )
}
