import { TOKEN_KEY } from 'api'
import { SkeletonLoading } from 'components'
import { useSelector } from 'hooks'
import cookie from 'js-cookie'
import { NextPage } from 'next'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { useAppDispatch } from 'store'
import { selectIsAuthenticated } from 'store/auth/selectors'
import { account } from 'store/auth/thunk'

export const withAuth = (Component: NextPage): unknown => {
  const AuthComponent: NextPage = (props: any) => {
    const token = cookie.get(TOKEN_KEY)
    const isAuthenticated = useSelector(selectIsAuthenticated)

    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (token) {
        // If has token, validate token if needed
        if (!isAuthenticated) {
          dispatch(account())
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
    return loading ? (
      <SkeletonLoading style={{ width: '100vw', height: '100vh' }} />
    ) : (
      <Component {...props} />
    )
  }

  return AuthComponent
}