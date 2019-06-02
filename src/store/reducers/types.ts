export interface filterStateType {
  from: string
  to: string
  time: string
  plan: string
}

export interface AppStateType {
  standardPrice: string[]
  plansPrice: string[]
  locales: string[]
  plans: string[]
  filter: filterStateType
}
