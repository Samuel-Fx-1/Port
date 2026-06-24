import { NextResponse } from 'next/server'
import { store, uid } from '@/lib/store'

export async function POST(req: Request){
  const { name, message } = await req.json()
  if(!name || !message) return NextResponse.json({ error: 'Missing' }, { status: 400 })
  const proof = { id: uid(), name, message, createdAt: new Date().toISOString(), reviewed: false }
  store.proofs.unshift(proof)
  store.stream.unshift({
    id: uid(), type:'proof', author: name, body: `✍️ ${name}: “${message.slice(0,140)}” — under review`, createdAt: proof.createdAt
  })
  const total = 1247 + store.proofs.length
  return NextResponse.json({ ok: true, visitorNumber: total })
}

export async function GET(){
  return NextResponse.json({ proofs: store.proofs, total: 1247 + store.proofs.length })
}
