// import { useSelector } from 'hooks'
import cookie from 'js-cookie'
import { NextPage } from 'next'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { CookieSessions } from 'services/types'
import { useAppDispatch } from 'store'

export const withAuth = (Component: NextPage): unknown => {
  const AuthComponent: NextPage = (props: any) => {
    const token = cookie.get(CookieSessions.token)
    // const isAuthenticated = useSelector(selectIsAuthenticated)
    const isAuthenticated = true

    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (token) {
        // If has token, validate token if needed
        if (!isAuthenticated) {
          // dispatch(account())
        }
      } else {
        Router.replace('/login')
      }
    }, [])

    useEffect(() => {
      if (isAuthenticated) {
        setLoading(false)
      }
    }, [isAuthenticated])

    // TODO: Add splash screen here
    return loading ? <></> : <Component {...props} />
  }

  return AuthComponent
}
