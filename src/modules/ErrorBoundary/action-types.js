import { createAction } from 'redux-actions'

export const IS_NOT_FOUND = 'errors/IS_NOT_FOUND'
export const IS_PASSWORD_VALID = 'erorr/INVALID_PASSWORD'
export const IS_EMAIL_EXIST = 'error/IS_EMAIL_EXIST'
export const IS_OTHER_ERROR = 'errors/IS_ANOTHER_ERROR'
export const IS_PASSWORD_WRONG = 'errors/IS_PASSWORD_WRONG'
export const RESET_ERROR_STATE = 'errors/RESET_ERROR_STATE'

export const setIsNotFound = createAction(IS_NOT_FOUND)
export const setIsPasswordValid = createAction(IS_PASSWORD_VALID)
export const setIsEmailExist = createAction(IS_EMAIL_EXIST)
export const setIsPasswordWrong = createAction(IS_PASSWORD_WRONG)
export const setResetErrorState = createAction(RESET_ERROR_STATE)
