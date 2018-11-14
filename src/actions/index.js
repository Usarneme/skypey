import { SET_ACTIVE_USER_ID } from './action-types'

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
})