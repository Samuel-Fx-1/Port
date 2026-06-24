import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/components/providers/AppProvider'
import { ToastProvider } from '@/components/providers/ToastProvider'

export const metadata: Metadata = {
  title: 'Frank Nabasa – Full-Stack Developer Building Real-World Web Applications & Systems',
  description: 'Frank Nabasa builds production-ready web applications, APIs, and backend systems using JavaScript and Node.js. Explore real projects and practical solutions.',
  keywords: ['Frank Nabasa','FrankPort','Full Stack Developer','Web Developer','JavaScript Developer','React Developer','Node.js','MySQL','Kigali Rwanda'],
  authors: [{ name: 'Frank Nabasa' }],
  openGraph: {
    title: 'Frank Nabasa – Full-Stack Developer',
    description: 'Professional portfolio showcasing expertise in modern web development. Specializing in JavaScript, React, Node.js, Express, and MySQL.',
    url: 'https://frankport.vercel.app',
    siteName: 'FrankPort',
    images: [{ url: '/images/frankport-og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frank Nabasa - Full Stack Developer Portfolio',
    description: 'Professional full-stack developer specializing in JavaScript, React, Node.js.',
    creator: '@franknab',
  },
  metadataBase: new URL('https://frankport.vercel.app'),
  themeColor: '#0a0f1c',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>
        <ToastProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
