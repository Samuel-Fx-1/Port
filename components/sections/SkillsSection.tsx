'use client'
import { skillGroups, techChips } from '@/lib/data'

export default function SkillsSection(){
  return (
    <section id="skills" style={{borderTop:'1px solid rgba(255,255,255,.05)'}}>
      <div className="container">
        <div className="section-num">03</div>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-sub">Technical proficiencies and tools I work with — applied to real projects from backend APIs to complete web platforms.</p>

        <div className="skills-wrap">
          {skillGroups.map(g=>(
            <div key={g.title} className="skill-col">
              <h4>{g.title}</h4>
              {g.items.map(s=>(
                <div className="skill-bar" key={s.name}>
                  <div className="label"><span>{s.name}</span><span>{s.pct}%</span></div>
                  <div className="bar-track"><div className="bar-fill" style={{width: s.pct+'%'}}></div></div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="tech-cloud">
          {techChips.map(t=> <span key={t} className="tech-chip">{t}</span>)}
        </div>
      </div>
    </section>
  )
}
