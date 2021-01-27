import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import cookies from 'js-cookie'

import { login } from './thunk'
import { AuthState } from './types'
import { CookieSessions } from 'services/types'

export const initialState: AuthState = {
  isLoading: false,
  error: undefined,
  user: undefined,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string }>) => {
      state.user = action.payload
    },
  },
  extraReducers: ({ addCase }) => {
    /** Login Case */
    addCase(login.pending, (state) => {
      cookies.remove(CookieSessions.token)
      state.isLoading = true
      state.error = undefined
      state.user = undefined
    })
    addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
    })
    addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
      state.error.message = action.payload ? String(action.payload) : undefined
    })
  },
})

export default slice.reducer
