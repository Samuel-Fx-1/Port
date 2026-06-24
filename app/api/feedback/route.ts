import { NextResponse } from 'next/server'
import { store, uid } from '@/lib/store'

export async function POST(req: Request){
  const { rating, comment, categories } = await req.json()
  if(!rating) return NextResponse.json({error:'rating required'}, {status:400})
  const f = { id: uid(), rating: Number(rating), comment: comment||'', categories, createdAt: new Date().toISOString() }
  store.feedback.unshift(f)
  return NextResponse.json({ ok: true })
}
export async function GET(){
  return NextResponse.json({ feedback: store.feedback })
}
