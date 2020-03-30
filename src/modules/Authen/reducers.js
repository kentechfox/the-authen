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
import { Storage, Constants } from '../../utils'
import firebase from 'react-native-firebase'

const initialState = Model(null)
// khai báo firebase.auth(), gán vào firebaseAuth để
// sử dụng được các method của firebase.auth() phục vụ
// cho các nghiệp vụ về authen (signIn, signUp, ...)
const firebaseAuth = firebase.auth()
// khai báo firebase.firestore(), gán vào fireStore để
// sử dụng được các method của firebase.firestore() phục vụ
// cho các nghiệp vụ về fireStore (lưu trữ, truy vấn,...)
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
  try {
    await firebaseAuth.sendPasswordResetEmail(email)
    dispatch(setForgotPassResponse(true))
  } catch (error) {
    console.log('FORGOT PASS ERROR', error)
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
    console.log('SIGN UP ERROR', error)
    // Phần error này tôi sẽ dùng 1 module về Error riêng để thu nhận
    // và handle các error, sau đó hiển thị lên cho user hoặc làm gì
    // tuỳ thích
  }
  dispatch(setLoading(false))
}

export const signInAcc = (email, password) => async dispatch => {
  dispatch(setLoading(true))
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
    console.log('SIGN IN ERROR', error)
    dispatch(setLoginDataResponse(error))
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
