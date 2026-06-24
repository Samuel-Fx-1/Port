export type ProjectCategory = 'web' | 'client' | 'fullstack' | 'ai'

export interface Project {
  id: string
  title: string
  tag: string
  year: number
  category: ProjectCategory
  img: string
  desc: string
  tags: string[]
  live?: string
  github?: string
  impact: string
  problem: string
  audience: string
  arch: string
  featured?: boolean
  stats?: { label: string; value: string }[]
}

export interface SkillItem {
  name: string
  pct: number
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  text: string
  avatar: string
  rating: number
}

export interface TimelineItem {
  role: string
  period: string
  desc: string
}

export interface VisitorProof {
  id: string
  name: string
  message: string
  createdAt: string
  reviewed: boolean
  ip?: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  read: boolean
}

export interface FeedbackEntry {
  id: string
  rating: number
  comment: string
  categories?: string[]
  createdAt: string
}

export interface IssueReport {
  id: string
  type: string
  urgency: string
  title: string
  description: string
  name?: string
  email?: string
  createdAt: string
}

export interface AdminStats {
  contacts: number
  feedback: number
  reports: number
  visitors: number
  today: number
  week: number
}

export interface StreamMessage {
  id: string
  type: 'system' | 'admin' | 'visitor' | 'proof'
  author: string
  title?: string
  body: string
  createdAt: string
  read?: boolean
}

export type SortMode = 'featured' | 'recent' | 'impact' | 'az'
export type FilterMode = 'all' | 'web' | 'client' | 'fullstack' | 'ai'

export interface AIChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  ts: number
}
