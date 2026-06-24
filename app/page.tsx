'use client'
import Topbar from '@/components/layout/Topbar'
import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import VisitorProofSection from '@/components/sections/VisitorProofSection'
import ContactSection from '@/components/sections/ContactSection'
import FeedbackSection from '@/components/sections/FeedbackSection'
import Footer from '@/components/layout/Footer'
import { ProjectModal } from '@/components/modals/ProjectModal'
import { AdminModal } from '@/components/modals/AdminModal'
import { ShareModal } from '@/components/modals/ShareModal'
import { ShortcutsModal } from '@/components/modals/ShortcutsModal'
import { ReportModal } from '@/components/modals/ReportModal'
import { AiModal } from '@/components/modals/AiModal'
import StreamDrawer from '@/components/layout/StreamDrawer'
import MusicPlayer from '@/components/layout/MusicPlayer'
import MusicFab from '@/components/layout/MusicFab'
import AiFab from '@/components/layout/AiFab'
import { useEffect } from 'react'
import { useToast } from '@/components/providers/ToastProvider'
import { useApp } from '@/components/providers/AppProvider'

export default function Page(){
  const { toast } = useToast()
  const { setOpenModal, setMusicOpen, toggleTheme } = useApp()

  useEffect(()=>{
    toast('✨ New Updates ✨ — Next.js 14 FrankPort loaded. Press ? for shortcuts.')
    const onKey = (e: KeyboardEvent) => {
      if(e.key === 'Escape'){
        setOpenModal(null)
      }
      if(e.ctrlKey && e.key.toLowerCase() === 'm'){ e.preventDefault(); setMusicOpen(true) }
      if(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l'){ e.preventDefault(); toggleTheme() }
      if(e.key === '?' && (e.target as HTMLElement)?.tagName !== 'INPUT' && (e.target as HTMLElement)?.tagName !== 'TEXTAREA'){
        setOpenModal('shortcuts')
      }
      if(e.ctrlKey && e.altKey && e.key.toLowerCase() === 'l'){
        e.preventDefault()
        toast('Language menu: EN · FR · ES · DE · ZH · RW')
      }
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <VisitorProofSection />
        <ContactSection />
        <FeedbackSection />
      </main>
      <Footer />

      {/* Global overlays */}
      <StreamDrawer />
      <MusicPlayer />
      <MusicFab />
      <AiFab />

      <ProjectModal />
      <AdminModal />
      <ShareModal />
      <ShortcutsModal />
      <ReportModal />
      <AiModal />
    </>
  )
}
