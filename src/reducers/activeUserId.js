import { SET_ACTIVE_USER_ID } from '../actions/action-types'

const activeUserId = (state = null, action) => {
  console.log('activeUserId reducer with action:',action)
  switch (action.type) {
    case SET_ACTIVE_USER_ID :
      return action.payload
    default : 
      return state
  }
}

export default activeUserId