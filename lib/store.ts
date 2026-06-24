// simple in-memory store (persists per server process, good for demo / Vercel serverless)
import { ContactMessage, FeedbackEntry, IssueReport, VisitorProof, StreamMessage } from './types'

type Store = {
  contacts: ContactMessage[]
  feedback: FeedbackEntry[]
  reports: IssueReport[]
  proofs: VisitorProof[]
  stream: StreamMessage[]
}

const g = global as any
if(!g.__FP_STORE__){
  g.__FP_STORE__ = {
    contacts: [],
    feedback: [],
    reports: [],
    proofs: [],
    stream: [
      { id:'s0', type:'system', author:'System', body:'🟢 System Stream14 – connected. Welcome to FrankPort!', createdAt: new Date().toISOString(), read: false }
    ]
  } as Store
}
export const store: Store = g.__FP_STORE__
export const uid = () => Math.random().toString(36).slice(2,10)
