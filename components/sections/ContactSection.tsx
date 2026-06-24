'use client'
import { useState } from 'react'
import { useToast } from '@/components/providers/ToastProvider'
import { useApp } from '@/components/providers/AppProvider'

export default function ContactSection(){
  const { toast } = useToast()
  const { addStream } = useApp()
  const [sending,setSending]=useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    setSending(true)
    const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    setSending(false)
    if(res.ok){
      toast('Message sent! Frank will reply via email soon.')
      addStream({ type:'visitor', author: String(payload.name), body: `📬 Contact: ${payload.subject}` })
      ;(e.target as HTMLFormElement).reset()
    } else {
      toast('Failed to send – try WhatsApp')
    }
  }

  return (
    <section id="contact" style={{borderTop:'1px solid rgba(255,255,255,.05)'}}>
      <div className="container">
        <div className="section-num">05</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">Let&apos;s discuss your next project or opportunity</p>

        <div className="contact-grid">
          <div className="glass-card contact-card">
            <h3>Let&apos;s Work Together</h3>
            <p className="muted">I&apos;m always interested in new opportunities and exciting projects. Whether you&apos;re looking for a developer to join your team or need help bringing your ideas to life, I&apos;d love to hear from you.</p>

            <div className="contact-links">
              <a href="https://wa.me/250794359825?text=Hi%20Frank%2C%20I%20just%20checked%20out%20your%20portfolio" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
                <div><strong>Whatsapp</strong><div className="muted" style={{fontSize:'12.5px'}}>Let&apos;s Chat on WhatsApp</div></div>
              </a>
              <a href="mailto:nabasafrank74@gmail.com?subject=Collaboration%20Opportunity">
                <i className="fa-regular fa-envelope"></i>
                <div><strong>Email</strong><div className="muted" style={{fontSize:'12.5px'}}>nabasafrank74@gmail.com</div></div>
              </a>
              <a href="tel:+250794359825">
                <i className="fa-solid fa-phone"></i>
                <div><strong>Phone</strong><div className="muted" style={{fontSize:'12.5px'}}>+250 794 359 825 · Quick Call</div></div>
              </a>
              <a href="#" onClick={(e)=>{e.preventDefault(); toast('Kigali, Rwanda · At Work')}}>
                <i className="fa-solid fa-location-dot"></i>
                <div><strong>Location</strong><div className="muted" style={{fontSize:'12.5px'}}>Kigali, Rwanda</div></div>
              </a>
            </div>

            <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:8}}>
              <a className="pill" href="https://github.com/Liam-Ajaxy" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub</a>
              <span className="pill"><i className="fa-solid fa-share-nodes"></i> Share FrankPort</span>
            </div>
          </div>

          <div className="glass-card">
            <form onSubmit={onSubmit}>
              <div className="form-grid">
                <input className="input" name="name" placeholder="Your Name" required />
                <input className="input" name="email" type="email" placeholder="Email Address" required />
                <input className="input full" name="subject" placeholder="Subject" required />
                <textarea className="full" name="message" placeholder="Message" required />
                <label className="check-row full"><input type="checkbox" required /> <span>I agree to the privacy policy and terms of service</span></label>
                <div className="full right">
                  <button className="btn btn-primary" type="submit" disabled={sending}>
                    {sending? 'Sending…' : <>Send Message <i className="fa-solid fa-paper-plane"></i></>}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
