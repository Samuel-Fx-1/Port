'use client'
import { useApp } from '@/components/providers/AppProvider'
import { musicPlaylist } from '@/lib/data'
import { useState } from 'react'
import { useToast } from '@/components/providers/ToastProvider'

export default function MusicPlayer(){
  const { musicOpen, setMusicOpen } = useApp()
  const [idx, setIdx] = useState(0)
  const { toast } = useToast()
  if(!musicOpen) return null
  return (
    <div className="music-mini" style={{display:'block'}}>
      <div className="music-head">
        <strong>🎵 FrankPort Live</strong>
        <button onClick={()=>setMusicOpen(false)} style={{background:'none', border:0, color:'#9fc4ea', cursor:'pointer'}}><i className="fa-solid fa-xmark"></i></button>
      </div>
      <div style={{fontSize:'12.5px', color:'#8eb6de', marginBottom:8}}>Calm Vibes · SYCO · Gym Phonk · Live from Audiomack</div>
      <div className="track-list">
        {musicPlaylist.map((t,i)=>(
          <div key={t+i} className={`track ${i===idx?'active':''}`} onClick={()=>{setIdx(i); toast('▶️ Now playing: '+t)}}>
            <span>{i+1}. {t}</span>
            <i className="fa-solid fa-play" style={{fontSize:11, opacity:.75}}></i>
          </div>
        ))}
      </div>
      <div style={{marginTop:10, fontSize:12, color:'#7d96b8'}}>
        Streaming via Audiomack embed (mock UI) · Press <span className="kbd">Ctrl+M</span> · 0:00 / 7:07:26
      </div>
    </div>
  )
}
