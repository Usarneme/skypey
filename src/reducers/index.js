import { combineReducers } from 'redux'

import contacts from './contacts'
import user from './user'
import activeUserId from './activeUserId'

export default combineReducers({
  user,
  contacts,
  activeUserId
})