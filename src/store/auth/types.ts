import { SerializedError } from '@reduxjs/toolkit'

export interface AuthState {
  isLoading: boolean
  error?: SerializedError
  user?: { name: string }
}
