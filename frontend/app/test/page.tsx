'use client'

import { useAuth } from '@/hooks/use-auth'

export default function TestPage() {
  const user = useAuth()

  if (!user) return <div>no user</div>

  return <div>hello {user.username}</div>
}
