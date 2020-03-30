import { combineReducers } from 'redux'

import AuthenReducer from '../../modules/Authen/reducers'
import ErrorReducer from '../../modules/ErrorBoundary/reducer'

const reducer = combineReducers({
  authen: AuthenReducer,
  errHandler: ErrorReducer
})

export default reducer
