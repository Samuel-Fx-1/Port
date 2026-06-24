import { NextResponse } from 'next/server'

export async function POST(req: Request){
  const { password, recoveryKey } = await req.json()
  if(password === 'frank2025' || recoveryKey === 'FRANK-RECOVER-2025'){
    return NextResponse.json({ ok: true, token: 'demo-admin-token' })
  }
  return NextResponse.json({ error: 'Invalid' }, { status: 401 })
}
