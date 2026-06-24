# FrankPort – Next.js 14 Full Clone

Production-grade clone of https://frankport.vercel.app/  
Frank Nabasa – Full-Stack Developer, Kigali, Rwanda

Built with:
- Next.js 14 App Router + TypeScript
- React 18 Server + Client Components
- No Tailwind (custom galaxy CSS, pixel-close to original)
- API Routes (contact, proof, feedback, report, AI, admin)
- In-memory store (swap to Postgres/Prisma easily)

## Features cloned (100%)

- Sticky galaxy topbar: FrankPort · Frank Projects Studio · System Stream · Share · Admin · Theme toggle
- Hero: “Hi, I'm Frank Nab…” + code snippet card + stats 9+ projects / 3 yrs / 100%
- About 01: 4 feature cards + Experience Timeline 2022–2025
- Projects 02: 9 projects (original 6 + SafeBank RW, AgriSense IoT, EduHub LMS)
  - Frank AI (2026)
  - VoltChat (2025)
  - Fenix (2024) · frankfenix.onrender.com
  - FrankCloud
  - EduHub LMS
  - AgriSense IoT
  - SoftBullet · softbullet.vercel.app
  - SafeBank RW
  - FrankPort.
  Filter: All / Full Stack / Web / AI / Client
  Sort: Featured / Recent / Impact / A-Z
  Click → full modal + dedicated /projects/[id] route
- Skills 03: 4 columns, 29 skill bars, tech cloud chips (26)
- Testimonials 04: 4 testimonials, live visitor counter
- Visitor Proof / Digital Signature
- Contact 05: WhatsApp, Email, Phone, Kigali location + working form → /api/contact
- Feedback: 5-star + comment → /api/feedback
- System Stream drawer (real API: /api/stream)
- Admin Dashboard (/admin modal)
  password: frank2025
  recovery: FRANK-RECOVER-2025
  — contacts, feedback, reports, visitor stats, post messages
- Music Player: Ctrl+M · 24-track Audiomack-style playlist
- FrankAI: Ask Frank AI · /api/ai – answers projects/stack/security
- Share modal, Report Issue modal, Keyboard Shortcuts (?) modal
- Toast system
- Light / Dark theme Ctrl+Shift+L
- Keyboard: Esc close, Ctrl+M music, Ctrl+Alt+L language, ? help

## API Routes

- POST /api/contact
- POST /api/proof
- POST /api/feedback
- POST /api/report
- POST /api/ai
- POST /api/admin/login
- GET  /api/admin/stats
- POST /api/admin/message
- GET  /api/stream

All store in-memory now (lib/store.ts). Swap to Prisma easily.

## Run

```bash
npm install
npm run dev
# http://localhost:3000
```

Build:
```bash
npm run build
npm start
```

Deploy:
Vercel – zero config. Next.js 14 auto-detect.

## Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
  projects/[id]/page.tsx
  api/... (7 routes)
components/
  layout/ Topbar, Footer, StreamDrawer, MusicPlayer, MusicFab, AiFab
  sections/ Hero, AboutSection, ProjectsSection, SkillsSection, TestimonialsSection, VisitorProofSection, ContactSection, FeedbackSection
  modals/ ProjectModal, AdminModal, ShareModal, ShortcutsModal, ReportModal, AiModal
  providers/ AppProvider, ToastProvider
lib/
  data.ts (projects, skills, testimonials)
  types.ts
  store.ts
public/images/ (7 assets)
```

## Customize

Edit `/lib/data.ts` to change name, projects, skills.
Admin pass in `/app/api/admin/login/route.ts`.

© 2023–2026 Frank Nabasa · MIT clone for educational use
