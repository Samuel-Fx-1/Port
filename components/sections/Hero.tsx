'use client'
export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid reveal in">
        <div>
          <div className="eyebrow"><span className="dot"></span> Available for new opportunities</div>
          <h1 className="hero-title">Hi, I&apos;m<br/><span className="grad">Frank Nab…</span></h1>
          <p className="hero-sub">I build real-world web applications, dashboards, and backend systems that actually work in production — not just demos or templates.</p>
          <div className="hero-stats">
            <div className="stat"><b>9+</b><span>Production Projects</span></div>
            <div className="stat"><b>3</b><span>Years Exp</span></div>
            <div className="stat"><b>100%</b><span>Client Satisfaction</span></div>
          </div>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary"><i className="fa-solid fa-rocket"></i> View My Work</a>
            <a href="#contact" className="btn btn-ghost"><i className="fa-regular fa-paper-plane"></i> Get In Touch</a>
          </div>
          <div className="socials">
            <a href="https://github.com/Liam-Ajaxy" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub</a>
            <span>•</span>
            <a href="mailto:nabasafrank74@gmail.com">nabasafrank74@gmail.com</a>
            <span>•</span>
            <span>Kigali, Rwanda</span>
          </div>
          <div className="scroll-hint"><div className="line"></div> Scroll Down</div>
        </div>

        <div className="hero-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-photo" src="/images/hero.jpg" alt="Frank Nabasa" />
          <div className="float-label">
            <strong>Frank Nabasa</strong>
            <small>Full Stack Developer</small>
          </div>
          <div className="code-snip">
            <span className="k">const</span> <span style={{color:'#fde68a'}}>developer</span> = &#123;<br/>
            &nbsp;&nbsp;<span className="p">name:</span> <span className="s">&apos;Frank Nab&apos;</span>,<br/>
            &nbsp;&nbsp;<span className="p">skills:</span> [<span className="s">&apos;JS&apos;</span>,<span className="s">&apos;React.js&apos;</span>,<span className="s">&apos;TS&apos;</span>,<span className="s">&apos;Next.js&apos;</span>,<span className="s">&apos;Node.js&apos;</span>],<br/>
            &nbsp;&nbsp;<span className="p">passion:</span> <span className="s">&apos;Creating Amazing Web Experiences&apos;</span><br/>
            &#125;
          </div>
        </div>
      </div>
    </section>
  )
}
