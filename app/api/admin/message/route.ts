import { NextResponse } from 'next/server'
import { store, uid } from '@/lib/store'

export async function POST(req: Request){
  const { title, body } = await req.json()
  store.stream.unshift({
    id: uid(),
    type: 'admin',
    author: 'Admin Frank',
    title,
    body,
    createdAt: new Date().toISOString()
  })
  return NextResponse.json({ ok: true })
}
