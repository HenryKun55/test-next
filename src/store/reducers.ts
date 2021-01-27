/**
 *
 * Combine all reducers in this file and export the combined reducers.
 *
 */

import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth/slice'

/**
 * Merges the main reducer with the router state
 */
const rootReducer = combineReducers({
  auth,
})

export { rootReducer }
