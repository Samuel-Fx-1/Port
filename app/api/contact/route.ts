import { NextResponse } from 'next/server'
import { store, uid } from '@/lib/store'

export async function POST(req: Request){
  const body = await req.json()
  const { name, email, subject, message } = body || {}
  if(!name || !email || !subject || !message){
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }
  const entry = { id: uid(), name, email, subject, message, createdAt: new Date().toISOString(), read: false }
  store.contacts.unshift(entry)
  store.stream.unshift({ id: uid(), type:'visitor', author: name, title: subject, body: message.slice(0,180), createdAt: entry.createdAt })
  return NextResponse.json({ ok: true, id: entry.id })
}

export async function GET(){
  return NextResponse.json({ contacts: store.contacts })
}
