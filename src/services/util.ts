import cookie from 'js-cookie'
import Router from 'next/router'
import { Auth } from '@aws-amplify/auth'
import { AxiosRequestConfig } from 'axios'

import { CookieSessions } from './types'

const scope = process.env.OAUTH_DOMAIN

const oauth = {
  domain: process.env.AWS_DOMAIN,
  scope: scope?.split(','),
  redirectSignIn: process.env.OAUTH_REDIRECT_SIGN_IN,
  redirectSignOut: process.env.OAUTH_REDIRECT_SIGN_OUT,
  responseType: process.env.AWS_RESPONSE_TYPE,
}

const awsSettings = {
  identityPoolId: process.env.AWS_IDENTITY_POOL_ID,
  region: process.env.AWS_REGION,
  userPoolId: process.env.AWS_USER_POOL_ID,
  userPoolWebClientId: process.env.AWS_USER_POOL_WEB_CLIENT_ID,
  redirectUri: process.env.AWS_REDIRECT_URI,
  userPoolDomain: process.env.AWS_USER_POOL_DOMAIN,
  oauth,
}

export function AuthConfigure() {
  Auth.configure(awsSettings)
}

export const verifyUserAttribute = async (attr: 'phone' | 'email') => {
  await Auth.verifyCurrentUserAttribute(attr)
}

export const submitUserAttribute = async (
  type: 'phone' | 'email',
  code: string
) => {
  await Auth.verifyCurrentUserAttributeSubmit(type, code)
}

export const changePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  return Auth.currentAuthenticatedUser().then((user) => {
    return Auth.changePassword(user, oldPassword, newPassword)
  })
}

export async function currentSession() {
  const session = await Auth.currentSession()
  return session
}

export async function tokenAndAccess(config: AxiosRequestConfig) {
  try {
    const session = await currentSession()
    const idToken = session.getIdToken().getJwtToken()
    const accessToken = session.getAccessToken().getJwtToken()
    config.headers.Authorization = `Bearer ${idToken}`
    config.headers.Access_token = accessToken

    return config
  } catch (e) {
    return config
  }
}

export async function justToken(config: AxiosRequestConfig) {
  try {
    const session = await currentSession()
    const idToken = session.getIdToken().getJwtToken()
    config.headers.Authorization = `Bearer ${idToken}`

    return config
  } catch (e) {
    return config
  }
}

export async function sessionExpired(error: any) {
  const erroData = error.response?.data
  if (
    error === 'No current user' ||
    error.response?.status == 401 ||
    (erroData?.code === 'NOT_AUTHORIZED_EXCEPTION' &&
      erroData.message === 'Invalid Access Token')
  ) {
    cookie.remove(CookieSessions.token)
    Router.replace('/login')
  }
  return Promise.reject(error)
}

export default Auth
