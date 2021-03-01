export type Trainer = {
  id: string
  trainerId: number
  name: string | undefined
  representativeId: Umamusume['id']
  supportId: Umamusume['id']
  comment: string
  createdAt: Date
}

export type Umamusume = {
  id: string
  name: string
}
