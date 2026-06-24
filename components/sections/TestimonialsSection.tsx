'use client'
import { testimonials } from '@/lib/data'
import { useApp } from '@/components/providers/AppProvider'

export default function TestimonialsSection(){
  const { visitors } = useApp()
  return (
    <section id="testimonials" style={{borderTop:'1px solid rgba(255,255,255,.05)'}}>
      <div className="container">
        <div className="section-num">04</div>
        <h2 className="section-title">Testimonials</h2>
        <p className="section-sub">Honest impressions and experiences from people who have engaged with our work.</p>

        <div className="testi-grid">
          {testimonials.slice(0,2).map(t=>(
            <div className="testi" key={t.id}>
              <p>“{t.text}”</p>
              <div className="who">
                <div className="avatar">{t.avatar}</div>
                <div><strong>{t.name}</strong><div className="muted" style={{fontSize:'12.5px'}}>{t.role}, {t.company}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-grid" style={{marginTop:18}}>
          {testimonials.slice(2).map(t=>(
            <div className="testi" key={t.id}>
              <p>“{t.text}”</p>
              <div className="who">
                <div className="avatar">{t.avatar}</div>
                <div><strong>{t.name}</strong><div className="muted" style={{fontSize:'12.5px'}}>{t.role}, {t.company}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="live-strip">
          <div><b>{visitors.toLocaleString()}</b><br/><span className="muted">Total Visitors</span></div>
          <div><b>13</b><br/><span className="muted">Today</span></div>
          <div><b>88</b><br/><span className="muted">This Week</span></div>
          <div style={{marginLeft:'auto'}} className="muted">Become a Pioneer — leave your digital signature ↓</div>
        </div>
      </div>
    </section>
  )
}
