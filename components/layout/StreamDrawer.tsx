'use client'
import { useApp } from '@/components/providers/AppProvider'

export default function StreamDrawer(){
  const { streamOpen, setStreamOpen, stream, clearStream, markAllRead } = useApp()
  return (
    <div className={`drawer ${streamOpen ? 'open' : ''}`}>
      <div className="drawer-bg" onClick={()=>setStreamOpen(false)} />
      <div className="drawer-panel">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
          <h3>System Stream</h3>
          <button onClick={()=>setStreamOpen(false)} className="icon-btn" style={{width:32,height:32}}><i className="fa-solid fa-xmark"></i></button>
        </div>
        <p className="muted" style={{fontSize:13, marginBottom:12}}>Your messages garden.</p>
        <div style={{display:'grid', gap:10}}>
          {stream.length===0 ? (
            <div style={{textAlign:'center', color:'#6e87a8', padding:'24px 10px'}}>
              <i className="fa-solid fa-seedling" style={{fontSize:28, marginBottom:8, color:'#5ad7bf'}}></i><br/>
              Your garden is quiet<br/><small className="muted">Messages from Admin Frank and visitors will bloom here</small>
            </div>
          ) : stream.map(m=>(
            <div key={m.id} className="feed-item">
              <div style={{fontSize:11, color:'#6ea6d4'}}>{new Date(m.createdAt).toLocaleString()} · {m.type}</div>
              <div><strong>{m.author}</strong>{m.title ? ` · ${m.title}`: ''}</div>
              <div className="muted">{m.body}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:14, display:'flex', gap:8}}>
          <button className="btn btn-ghost" style={{padding:'8px 12px', fontSize:'12.5px'}} onClick={clearStream}>Clear All</button>
          <button className="btn btn-ghost" style={{padding:'8px 12px', fontSize:'12.5px'}} onClick={markAllRead}>Mark All Read</button>
        </div>
      </div>
    </div>
  )
}
