import { AxiosInstance } from 'axios'
import cookie from 'js-cookie'
import Router from 'next/router'

import { CookieSessions } from './types'

export const configureInterceptors = (axios: AxiosInstance): void => {
  axios.interceptors.request.use((config) => {
    const headers = { ...config.headers }

    const token = cookie.get(CookieSessions.token)

    if (token && !config.headers.Authorization) {
      headers.Authorization = `Bearer ${token}`
    }

    // Adding / into the end
    if (config.url && !config.url.endsWith('/')) {
      config.url += '/'
    }

    return { ...config, headers }
  })

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        Router.replace('/login')
      }

      return Promise.reject(error)
    }
  )
}
