import { combineReducers } from 'redux'

import AuthenReducer from '../../modules/Authen/reducers'

const reducer = combineReducers({
  authen: AuthenReducer
})

export default reducer
