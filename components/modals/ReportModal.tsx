'use client'
import { useApp } from '@/components/providers/AppProvider'
import { useToast } from '@/components/providers/ToastProvider'
import { useState } from 'react'

export function ReportModal(){
  const { openModal, setOpenModal, addStream } = useApp()
  const open = openModal==='report'
  const { toast } = useToast()
  const [form,setForm]=useState({type:'🐛 Bug or Error', urgency:'⚡ Medium', title:'', description:'', name:'', email:''})

  const submit = async ()=>{
    if(!form.title.trim() || !form.description.trim()){ toast('Add title & description'); return }
    const r = await fetch('/api/report', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
    if(r.ok){
      toast('Report submitted – thanks!')
      addStream({type:'system', author: form.name || 'Anonymous', body: `🚨 Report: ${form.title}`})
      setOpenModal(null)
      setForm({type:'🐛 Bug or Error', urgency:'⚡ Medium', title:'', description:'', name:'', email:''})
    } else toast('Failed')
  }

  if(!open && openModal!=='report') return <div className={`modal ${open?'open':''}`} aria-hidden />
  return (
    <div className={`modal ${open?'open':''}`}>
      <div className="modal-bg" onClick={()=>setOpenModal(null)} />
      <div className="modal-box" style={{maxWidth:560}}>
        <button className="close-x" onClick={()=>setOpenModal(null)}>×</button>
        <h3>🚨 Report an Issue</h3>
        <p className="muted" style={{fontSize:13, marginBottom:14}}>Use this form to report critical issues, bugs, security concerns, or inappropriate content.</p>
        <div style={{display:'grid', gap:10}}>
          <select className="input" value={form.type} onChange={e=>setForm(f=>({...f, type:e.target.value}))}>
            <option>🐛 Bug or Error</option>
            <option>🔒 Security Concern</option>
            <option>⚠️ Inappropriate Content</option>
            <option>🔧 Broken Feature</option>
            <option>⚡ Performance Issue</option>
            <option>♿ Accessibility Problem</option>
            <option>📋 Other Issue</option>
          </select>
          <select className="input" value={form.urgency} onChange={e=>setForm(f=>({...f, urgency:e.target.value}))}>
            <option>🚨 Critical</option>
            <option>⚠️ High</option>
            <option>⚡ Medium</option>
            <option>ℹ️ Low</option>
          </select>
          <input className="input" placeholder="Issue Title *" value={form.title} onChange={e=>setForm(f=>({...f, title:e.target.value}))} />
          <textarea placeholder="Detailed Description *" value={form.description} onChange={e=>setForm(f=>({...f, description:e.target.value}))} />
          <div style={{display:'flex', gap:10}}>
            <input className="input" placeholder="Your Name (optional)" value={form.name} onChange={e=>setForm(f=>({...f, name:e.target.value}))} />
            <input className="input" placeholder="Your Email (optional)" value={form.email} onChange={e=>setForm(f=>({...f, email:e.target.value}))} />
          </div>
          <div style={{textAlign:'right'}}>
            <button className="btn btn-ghost" onClick={()=>setOpenModal(null)}>Cancel</button>{' '}
            <button className="btn btn-primary" onClick={submit}>Submit Report</button>
          </div>
        </div>
      </div>
    </div>
  )
}
