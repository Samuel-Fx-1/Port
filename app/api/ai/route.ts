import { NextResponse } from 'next/server'
import { projects } from '@/lib/data'

const knowledge = `
Frank Nabasa – Full Stack Developer, Kigali, Rwanda.
Email nabasafrank74@gmail.com · WhatsApp +250794359825 · GitHub Liam-Ajaxy
Stack: JavaScript ES6+, TypeScript, React.js, Next.js 14, Node.js, Express, MySQL, MongoDB, Postgres, Redis, Docker, GitHub Actions, GSAP, Tailwind.
Projects: ${projects.map(p=>`${p.title} (${p.year}): ${p.desc}`).join(' | ')}
Security: JWT refresh rotation, bcrypt/argon2, rate limiting, Helmet/CORS, RBAC, prepared statements, AES-GCM ready, audit logs.
`

function answer(q: string){
  q = q.toLowerCase()
  if(q.includes('project')||q.includes('best')) return "Top builds: Frank AI (OpenAI + WebSocket, 10k concurrent), SafeBank RW (fintech ledger 12k TPS), VoltChat (Redis 50k msg/s), Fenix (Node framework -60% dev time), AgriSense IoT (MQTT + TimescaleDB), FrankCloud (weather 99.9%), SoftBullet (terminal sim), EduHub LMS, and FrankPort (95+ Lighthouse)."
  if(q.includes('stack')||q.includes('tech')) return "Main: JavaScript/TypeScript, React / Next.js 14, Node.js, Express, MySQL / Postgres / MongoDB, Redis / BullMQ, Prisma / Drizzle, Docker, GitHub Actions, Tailwind, GSAP. Frontend 90-95%, Backend Node 95%, REST/GraphQL 90%."
  if(q.includes('ai')) return "Yes – Frank AI: production-ready assistant, OpenAI gpt-4o, WebSocket gateway, Redis queue, vector memory, 100→10,000+ concurrent chats, <320ms p95."
  if(q.includes('secur')) return "JWT + refresh rotation, bcrypt/argon2, rate limiting + Helmet, input sanitization (Zod), CORS strict, RBAC, encrypted env via Vault pattern, MySQL/Postgres prepared statements, audit logs, Sentry + OpenTelemetry."
  if(q.includes('tough')||q.includes('hardest')) return "VoltChat & SafeBank RW – VoltChat: Socket.io cluster, Redis pub/sub sharding, 50k msg/sec. SafeBank: double-entry ledger, PostgreSQL partitioning, idempotency keys, fraud scoring, MTN MoMo adapter."
  if(q.includes('contact')||q.includes('reach')||q.includes('hire')) return "WhatsApp +250 794 359 825, Email nabasafrank74@gmail.com, GitHub @Liam-Ajaxy, Kigali, Rwanda. Use the contact form – average reply <4h."
  return "I'm FrankAI, built into FrankPort. "+knowledge.slice(0,420)
}

export async function POST(req: Request){
  const { message } = await req.json()
  const a = answer(String(message||''))
  return NextResponse.json({ answer: a })
}
