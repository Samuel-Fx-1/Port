'use client'
import { useApp } from '@/components/providers/AppProvider'

export function ProjectModal(){
  const { openModal, setOpenModal, selectedProject } = useApp()
  const open = openModal === 'project' && !!selectedProject
  if(!selectedProject) return null
  const p = selectedProject
  return (
    <div className={`modal ${open ? 'open':''}`} aria-hidden={!open}>
      <div className="modal-bg" onClick={()=>setOpenModal(null)} />
      <div className="modal-box">
        <button className="close-x" onClick={()=>setOpenModal(null)}>×</button>
        <div style={{display:'flex', gap:18, alignItems:'flex-start', flexWrap:'wrap'}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.img} alt="" style={{width:84, height:84, objectFit:'contain', background:'#0a1326', borderRadius:14, border:'1px solid #1d2d4d', padding:10}}/>
          <div>
            <div style={{color:'#5fe9cc', fontSize:12}}>{p.tag} · {p.year}</div>
            <h2 style={{fontSize:26, margin:'4px 0 6px'}}>{p.title}</h2>
            <div className="tags">{p.tags.map(t=> <span key={t} className="tag">{t}</span>)}</div>
          </div>
          <div style={{marginLeft:'auto', display:'flex', gap:8}}>
            {p.live && <a className="btn btn-primary" style={{padding:'9px 14px'}} href={p.live} target="_blank" rel="noreferrer">View Live</a>}
            <a className="btn btn-ghost" style={{padding:'9px 14px'}} href={p.github || 'https://github.com/Liam-Ajaxy'} target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </div>

        {p.stats && (
          <div style={{display:'flex', gap:14, flexWrap:'wrap', marginTop:14}}>
            {p.stats.map(s=>(
              <div key={s.label} style={{background:'rgba(255,255,255,.035)', border:'1px solid rgba(255,255,255,.07)', borderRadius:12, padding:'10px 14px', minWidth:140}}>
                <div style={{fontSize:22, fontWeight:700, color:'#e9f6ff'}}>{s.value}</div>
                <div className="muted" style={{fontSize:11.5}}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginTop:20}}>
          <div><h4>What is this?</h4><p className="muted">{p.desc}</p></div>
          <div><h4>Problem Solved</h4><p className="muted">{p.problem}</p></div>
          <div><h4>Who is this for?</h4><p className="muted">{p.audience}</p></div>
          <div><h4>Business Impact</h4><p className="muted">{p.impact}</p></div>
        </div>
        <div style={{marginTop:16}}><h4>System Architecture</h4><p className="muted">{p.arch}</p></div>
      </div>
    </div>
  )
}
