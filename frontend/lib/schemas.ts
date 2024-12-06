import { z } from 'zod'

// actions

export const signUpSchema = z.object({
  username: z.string().min(2, 'username must be at least 2 characters'),
  password: z.string().min(6, 'password must be at least 6 characters'),
})

export type SignUpValues = z.infer<typeof signUpSchema>

export const logInSchema = z.object({
  username: z.string().min(1, 'username is required'),
  password: z.string().min(1, 'password is required'),
})

export type LogInValues = z.infer<typeof logInSchema>

// data

export const profileSchema = z.object({
  username: z.string(),
  id: z.string(),
})

export type ProfileData = z.infer<typeof profileSchema>
