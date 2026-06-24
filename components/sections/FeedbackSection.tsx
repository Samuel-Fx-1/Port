'use client'
import { useState } from 'react'
import { useToast } from '@/components/providers/ToastProvider'

export default function FeedbackSection(){
  const [rating,setRating] = useState(0)
  const [hover,setHover] = useState(0)
  const [text,setText] = useState('')
  const { toast } = useToast()

  const send = async () => {
    if(!rating){ toast('Click stars to rate first.'); return }
    const res = await fetch('/api/feedback', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ rating, comment: text })
    })
    if(res.ok){ toast('Thanks! Feedback submitted.'); setRating(0); setText('') } else toast('Failed')
  }

  const show = hover || rating

  return (
    <section style={{borderTop:'1px solid rgba(255,255,255,.05)', paddingBottom:90}}>
      <div className="container">
        <div className="glass-card" style={{maxWidth:860, margin:'0 auto'}}>
          <h3 style={{fontSize:22, marginBottom:6}}>Share Your Feedback</h3>
          <p className="muted" style={{marginBottom:14}}>How would you rate your experience?</p>
          <div style={{fontSize:26, cursor:'pointer', userSelect:'none', marginBottom:14}}>
            {[1,2,3,4,5].map(n=>(
              <i
                key={n}
                className={n <= show ? 'fa-solid fa-star' : 'fa-regular fa-star'}
                style={{color: n <= show ? '#fbbf24' : '#3a4e71', marginRight:6}}
                onMouseEnter={()=>setHover(n)}
                onMouseLeave={()=>setHover(0)}
                onClick={()=>setRating(n)}
              />
            ))}
          </div>
          <textarea placeholder="What specifically impressed you the most?" value={text} onChange={e=>setText(e.target.value)} />
          <div style={{display:'flex', justifyContent:'flex-end', marginTop:12, gap:10}}>
            <button className="btn btn-ghost" onClick={()=>{setRating(0);setText('')}}>Clear</button>
            <button className="btn btn-primary" onClick={send}>Send Feedback</button>
          </div>
        </div>
      </div>
    </section>
  )
}
