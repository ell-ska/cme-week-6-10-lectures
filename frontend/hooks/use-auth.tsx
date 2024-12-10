'use client'

import { ProfileData } from '@/lib/schemas'
import { createContext, type ReactNode, use } from 'react'

const AuthContext = createContext<ProfileData | null>(null)

export const AuthProvider = ({
  children,
  user,
}: {
  children: ReactNode
  user: ProfileData | null
}) => {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => use(AuthContext)
