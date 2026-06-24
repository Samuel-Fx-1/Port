'use client'
import { timeline } from '@/lib/data'

export default function AboutSection(){
  return (
    <section id="about">
      <div className="container">
        <div className="section-num">01</div>
        <h2 className="section-title">About Me</h2>
        <p className="section-sub">Passionate developer with a mission to create exceptional digital experiences</p>

        <div className="about-grid">
          <div className="glass-card">
            <p style={{color:'#c8d9f2', marginBottom:12}}>
              I’m a full-stack web developer focused on building functional, production-ready systems — including APIs, dashboards, authentication flows, and real data-driven applications.
            </p>
            <p style={{color:'#9cb3d3'}}>
              I don’t just design interfaces. I also build the logic behind them, connect databases, secure user access, and make sure applications actually run reliably in the real world.
            </p>

            <div className="about-list">
              {[
                {icon:'fa-code', t:'Production-Ready Code', d:'Maintainable, scalable code that supports real users, real data, and long-term growth.'},
                {icon:'fa-diagram-project', t:'System-Level Problem Solving', d:'Designing and debugging complete systems from frontend behavior to backend logic and data flow.'},
                {icon:'fa-people-group', t:'Client & Team Collaboration', d:'Translating business requirements into working technical solutions and communicating clearly throughout delivery.'},
                {icon:'fa-layer-group', t:'Adaptable & Tool-Agnostic', d:'Choosing the right tools for the job and adapting quickly as project requirements evolve.'},
              ].map(f=>(
                <div key={f.t} className="feature">
                  <i className={`fa-solid ${f.icon}`}></i>
                  <h4>{f.t}</h4>
                  <p>{f.d}</p>
                </div>
              ))}
            </div>
            <div style={{marginTop:18, display:'flex', gap:12, flexWrap:'wrap', alignItems:'center'}}>
              <button className="btn btn-ghost" onClick={()=>alert('CV: frankport CV v3.pdf')}><i className="fa-solid fa-file-arrow-down"></i> Download CV</button>
              <span className="muted" style={{fontSize:13}}>Node.js • Express • Next.js • React • MySQL • Postgres • Redis • Docker</span>
            </div>
          </div>

          <div className="glass-card">
            <h3 style={{marginBottom:14}}>Experience Timeline</h3>
            <div className="timeline">
              {timeline.map(t=>(
                <div key={t.role} className="tl-item">
                  <strong>{t.role}</strong>
                  <span>{t.period}</span>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
