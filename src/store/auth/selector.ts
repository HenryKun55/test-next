import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/types'

import { initialState } from './slice'

const authSelectors = (state: RootState) => state.auth || initialState

export const selectIsLoading = createSelector(
  authSelectors,
  (state) => state.isLoading
)

export const selectAuthError = createSelector(
  authSelectors,
  (state) => state.error
)

export const selectIsAuthenticated = createSelector(
  authSelectors,
  (state) => !!state.user
)

export const selectUser = createSelector(authSelectors, (state) => state.user)
