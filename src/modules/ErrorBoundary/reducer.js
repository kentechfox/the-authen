import { handleActions } from 'redux-actions'
import Model from './model'

import {
  IS_NOT_FOUND,
  IS_OTHER_ERROR,
  IS_PASSWORD_VALID,
  IS_EMAIL_EXIST,
  IS_PASSWORD_WRONG,
  RESET_ERROR_STATE
} from './action-types'

const initialState = Model(null)

const actions = {
  [IS_NOT_FOUND]: (state, action) => state.setIsNotFound(action.payload),
  [IS_OTHER_ERROR]: (state, action) => state.setOtherError(action.payload),
  [IS_PASSWORD_VALID]: (state, action) => state.setPasswordInvalid(action.payload),
  [IS_EMAIL_EXIST]: (state, action) => state.setEmailExist(action.payload),
  [IS_PASSWORD_WRONG]: (state, action) => state.setPasswordWrong(action.payload),
  [RESET_ERROR_STATE]: () => initialState
}

export default handleActions(actions, initialState)
