import { NextResponse } from 'next/server'
import { store, uid } from '@/lib/store'

export async function POST(req: Request){
  const body = await req.json()
  const { type, urgency, title, description } = body
  if(!title || !description) return NextResponse.json({ error:'missing' }, { status:400 })
  const rep = { id: uid(), ...body, createdAt: new Date().toISOString() }
  store.reports.unshift(rep)
  store.stream.unshift({ id: uid(), type:'system', author:'Reporter', title, body: `${type} · ${urgency} — ${description.slice(0,140)}`, createdAt: rep.createdAt })
  return NextResponse.json({ ok: true })
}
export async function GET(){
  return NextResponse.json({ reports: store.reports })
}
