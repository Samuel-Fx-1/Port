'use client'
import { useMemo, useState } from 'react'
import { projects } from '@/lib/data'
import { FilterMode, Project, SortMode } from '@/lib/types'
import { useApp } from '@/components/providers/AppProvider'

export default function ProjectsSection(){
  const [filter, setFilter] = useState<FilterMode>('all')
  const [sort, setSort] = useState<SortMode>('featured')
  const { setSelectedProject, setOpenModal } = useApp()

  const list = useMemo(()=>{
    let ls = [...projects]
    if(filter!=='all') ls = ls.filter(p=>p.category===filter)
    if(sort==='recent') ls.sort((a,b)=>b.year-a.year)
    else if(sort==='az') ls.sort((a,b)=>a.title.localeCompare(b.title))
    else if(sort==='impact') ls.sort((a,b)=> (b.featured?1:0)-(a.featured?1:0) || b.year-a.year)
    else ls.sort((a,b)=> (b.featured?1:0)-(a.featured?1:0))
    return ls
  }, [filter, sort])

  const open = (p:Project) => {
    setSelectedProject(p)
    setOpenModal('project')
    history.pushState(null,'',`/projects/${p.id}`)
  }

  return (
    <section id="projects" style={{borderTop:'1px solid rgba(255,255,255,.05)'}}>
      <div className="container">
        <div className="section-num">02</div>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-sub">A focused selection of real-world systems I’ve built, highlighting the most relevant and impactful work. <em style={{color:'#7fdde6'}}>* Click on any project to see comprehensive info.</em></p>

        <div className="projects-toolbar">
          <div>
            <div style={{fontSize:12,color:'#8aa3c5',marginBottom:6}}>Sort by:</div>
            <div className="pills">
              {([
                ['featured','Featured'],
                ['recent','Most Recent'],
                ['impact','Business Impact'],
                ['az','A-Z'],
              ] as [SortMode,string][]).map(([k,label])=>(
                <span key={k} className={`pill ${sort===k?'active':''}`} onClick={()=>setSort(k)}>{label}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:12,color:'#8aa3c5',marginBottom:6}}>Filter by:</div>
            <div className="pills">
              {([
                ['all','All Projects'],
                ['fullstack','Full Stack'],
                ['web','Web Systems'],
                ['ai','AI'],
                ['client','Client Apps'],
              ] as [FilterMode,string][]).map(([k,label])=>(
                <span key={k} className={`pill ${filter===k?'active':''}`} onClick={()=>setFilter(k)}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {list.map(p=>(
            <article key={p.id} className="project-card" onClick={()=>open(p)}>
              <div className="proj-year">{p.year}</div>
              <div className="thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} />
              </div>
              <div style={{fontSize:'11.5px',color:'#66e9d4'}}>{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.slice(0,4).map(t=> <span key={t} className="tag">{t}</span>)}
                {p.tags.length>4 && <span className="tag">+{p.tags.length-4}</span>}
              </div>
              <div className="project-foot">
                <span style={{color:'#67e8f9'}}>View Full Details →</span>
                <span>{p.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
