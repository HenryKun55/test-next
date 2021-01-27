import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiUser } from 'services/api'
import cookie from 'js-cookie'
import Router from 'next/router'
import { CookieSessions } from 'services/types'

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: any, { rejectWithValue }) => {
    try {
      const response = await apiUser.get('/login', loginData)

      cookie.set(CookieSessions.token, response.data.key)
      Router.replace('/')

      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
