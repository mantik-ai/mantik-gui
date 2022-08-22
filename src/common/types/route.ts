import { ReactNode } from 'react'

export interface Route {
    name: string
    path: string
    positions?: string[]
    icon?: ReactNode
}
