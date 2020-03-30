import { createAction } from 'redux-actions'

export const LOADING = 'Authen/LOADING'
export const LOGIN_DATA_RESPONSE = 'Authen/LOGIN_DATA_RESPONSE'
export const FORGOT_PASS_RESPONSE = 'Authen/FORGOT_PASS_RESPONSE'

export const setLoading = createAction(LOADING)
export const setLoginDataResponse = createAction(LOGIN_DATA_RESPONSE)
export const setForgotPassResponse = createAction(FORGOT_PASS_RESPONSE)
