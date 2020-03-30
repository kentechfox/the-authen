import { handleActions } from 'redux-actions'
import {
  LOADING,
  LOGIN_DATA_RESPONSE,
  FORGOT_PASS_RESPONSE,
  setLoading,
  setLoginDataResponse,
  setForgotPassResponse
} from './action-types'
import Model from './model'
import { Storage, Constants, RequestHandler } from '../../utils'
import firebase from 'react-native-firebase'
import { setResetErrorState } from '../ErrorBoundary/action-type'

const initialState = Model(null)
const firebaseAuth = firebase.auth()
const fireStore = firebase.firestore()

export const signOut = () => async dispatch => {
  dispatch(setLoading(true))
  try {
    await firebaseAuth.signOut()
    await Storage.remove(Constants.storageKey.auth.USER_INFO_STORAGE_KEY)
    dispatch(setLoginDataResponse({}))
  } catch (error) {
    console.log('LOGIN ERORR', error)
  }
  dispatch(setLoading(false))
}
export const forgotPass = email => async dispatch => {
  dispatch(setLoading(true))
  dispatch(setResetErrorState())
  try {
    await firebaseAuth.sendPasswordResetEmail(email)
    dispatch(setForgotPassResponse(true))
  } catch (error) {
    const errorCode = error.code
    RequestHandler(errorCode, dispatch)
  }
  dispatch(setLoading(false))
}

export const signUpAcc = (
  email,
  password,
  phone,
  fullName
) => async dispatch => {
  dispatch(setLoading(true))
  dispatch(setResetErrorState())
  try {
    const response = await firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    )
    const data = {
      email,
      password,
      fullName,
      phone
    }
    dispatch(setLoginDataResponse(data))
    await Storage.set(Constants.storageKey.auth.USER_INFO_STORAGE_KEY, data)
    const userUID = response.user._user.uid

    await fireStore
      .collection('users')
      .doc(userUID)
      .set(data)
  } catch (error) {
    const errorCode = error.code
    RequestHandler(errorCode, dispatch)
  }
  dispatch(setLoading(false))
}

export const signInAcc = (email, password) => async dispatch => {
  dispatch(setLoading(true))
  dispatch(setResetErrorState())
  try {
    const response = await firebaseAuth.signInWithEmailAndPassword(
      email,
      password
    )
    const userUID = response.user._user.uid
    const userData = await fireStore
      .collection('users')
      .doc(userUID)
      .get()

    if (userData.exists) {
      const userInfo = userData.data()
      await Storage.set(
        Constants.storageKey.auth.USER_INFO_STORAGE_KEY,
        userInfo
      )
      dispatch(setLoginDataResponse(userInfo))
    }
  } catch (error) {
    const errorCode = error.code
    RequestHandler(errorCode, dispatch)
  }
  dispatch(setLoading(false))
}

const actions = {
  [LOADING]: (state, action) => state.setLoading(action.payload),
  [LOGIN_DATA_RESPONSE]: (state, action) => {
    return state.setUserInfo(action.payload)
  },
  [FORGOT_PASS_RESPONSE]: (state, action) => {
    return state.setForgotPass(action.payload)
  }
}

export default handleActions(actions, initialState)
