'use client'
import { useApp } from '@/components/providers/AppProvider'

export default function MusicFab(){
  const { setMusicOpen, musicOpen } = useApp()
  return (
    <button className="music-fab" onClick={()=>setMusicOpen(!musicOpen)} title="Music Player Ctrl+M" aria-label="Music">
      <i className="fa-solid fa-music"></i>
    </button>
  )
}
