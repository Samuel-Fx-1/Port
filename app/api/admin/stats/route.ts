import { NextResponse } from 'next/server'
import { store } from '@/lib/store'

export async function GET(){
  return NextResponse.json({
    contacts: store.contacts.length,
    feedback: store.feedback.length,
    reports: store.reports.length,
    visitors: 1247 + store.proofs.length,
    today: 13,
    week: 88
  })
}
