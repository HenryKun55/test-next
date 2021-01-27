import axios from 'axios'

import { justToken, tokenAndAccess, sessionExpired } from './util'

export const apiUser = axios.create({
  baseURL: process.env.BASE_URL_USER,
})

apiUser.interceptors.request.use(tokenAndAccess)
apiUser.interceptors.response.use((r) => r, sessionExpired)
