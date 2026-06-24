'use client'
import { useState } from 'react'
import { useApp } from '@/components/providers/AppProvider'
import { useToast } from '@/components/providers/ToastProvider'

export default function VisitorProofSection(){
  const { visitors, bumpVisitor, addStream } = useApp()
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async () => {
    if(!name.trim() || !msg.trim()){ toast('Please enter name and message.'); return }
    const res = await fetch('/api/proof', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, message: msg }) })
    if(res.ok){
      bumpVisitor()
      addStream({ type:'proof', author: name, body: `✍️ ${name}: “${msg.slice(0,140)}” — under review` })
      toast(`Proof Received! You're now visitor #${visitors+1}`)
      setName(''); setMsg('')
    } else {
      toast('Failed to submit proof')
    }
  }

  return (
    <section style={{borderTop:'1px solid rgba(255,255,255,.05)'}}>
      <div className="container">
        <div className="sig-box">
          <div>
            <h3 style={{fontSize:24, marginBottom:8}}>Leave Your<br/>Digital Signature</h3>
            <p className="muted">Join <b style={{color:'#e8f4ff'}}>{visitors.toLocaleString()}</b> visitors who&apos;ve left their mark on FrankPort</p>
            <p className="help" style={{marginTop:16}}>
              Where will my message appear?<br/>
              After review, your message will show in the <b>System Stream</b>. Access it by clicking the menu icon (top-right corner) → System Stream.
            </p>
          </div>
          <div>
            <input className="input" placeholder="Your Name" maxLength={50} value={name} onChange={e=>setName(e.target.value)} style={{marginBottom:10}}/>
            <textarea placeholder="Your Message" maxLength={300} value={msg} onChange={e=>setMsg(e.target.value)} />
            <div className="qs">
              {['Great portfolio!','Impressive work!','Love the design!'].map(q=>(
                <button type="button" key={q} onClick={()=>setMsg(q)}>{q}</button>
              ))}
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8}}>
              <span className="muted" style={{fontSize:12}}>{msg.length}/300</span>
              <button className="btn btn-primary" onClick={submit} style={{padding:'10px 18px'}}>Submit Your Proof</button>
            </div>
            <div className="help">Your message will be reviewed and appear in the System Stream</div>
          </div>
        </div>
      </div>
    </section>
  )
}
