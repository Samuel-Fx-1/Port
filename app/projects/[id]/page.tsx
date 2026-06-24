import { projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams(){
  return projects.map(p=>({ id: p.id }))
}
export async function generateMetadata({ params }:{ params:{ id:string }}) {
  const p = projects.find(x=>x.id===params.id)
  if(!p) return {}
  return {
    title: `${p.title} – FrankPort Project`,
    description: p.desc
  }
}

export default function ProjectPage({ params }:{ params:{id:string}}){
  const p = projects.find(x=>x.id===params.id)
  if(!p) return notFound()
  return (
    <div style={{minHeight:'100vh', background:'var(--bg)', color:'var(--text)'}}>
      <div className="container" style={{padding:'42px 0'}}>
        <Link href="/#projects" className="muted">← Back to FrankPort</Link>
        <div style={{display:'flex', gap:20, alignItems:'flex-start', flexWrap:'wrap', marginTop:20}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.img} alt={p.title} style={{width:96,height:96,objectFit:'contain', background:'#0a1326', borderRadius:16, border:'1px solid #1d2d4d', padding:12}}/>
          <div>
            <div style={{color:'#5fe9cc', fontSize:12}}>{p.tag} · {p.year}</div>
            <h1 style={{fontSize:34, margin:'6px 0'}}>{p.title}</h1>
            <div className="tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
          </div>
          <div style={{marginLeft:'auto'}}>
            {p.live && <a className="btn btn-primary" href={p.live} target="_blank" rel="noreferrer">View Live</a>}
          </div>
        </div>

        <div className="glass-card" style={{marginTop:24}}>
          <p style={{fontSize:16, color:'#d7e6ff'}}>{p.desc}</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginTop:18}}>
            <div><h4>Problem Solved</h4><p className="muted">{p.problem}</p></div>
            <div><h4>Who is this for?</h4><p className="muted">{p.audience}</p></div>
            <div><h4>Business Impact</h4><p className="muted">{p.impact}</p></div>
            <div><h4>System Architecture</h4><p className="muted">{p.arch}</p></div>
          </div>
        </div>

        <div style={{marginTop:22}}>
          <Link href="/" className="btn btn-ghost">← Return to portfolio</Link>
        </div>
      </div>
    </div>
  )
}
