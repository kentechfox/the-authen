import { handleActions } from 'redux-actions'
import {
  LOADING,
  LOGIN_DATA_RESPONSE,
  setLoading,
  setLoginDataResponse
} from './action-types'
import Model from './model'
import { Storage, Constants } from '../../utils'
import firebase from 'react-native-firebase'

const initialState = Model(null)
const firebaseAuth = firebase.auth()
const fireStore = firebase.firestore()

export const setUserInfo = userInfo => dispatch => {
  dispatch(setLoginDataResponse(userInfo))
}

export const signOut = () => async dispatch => {
  dispatch(setLoading(true))
  try {
    await firebaseAuth.signOut()
    await Storage.remove(Constants.storageKey.auth.USER_INFO_STORAGE_KEY)
    dispatch(setUserInfo({}))
  } catch (error) {
    console.log('LOGIN ERORR', error)
  }
  dispatch(setLoading(false))
}

export const signUpAcc = (
  email,
  password,
  phone,
  fullName,
  navigation
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
    dispatch(setLoginDataResponse(error))
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
    dispatch(setLoginDataResponse(error))
  }
  dispatch(setLoading(false))
}

const actions = {
  [LOADING]: (state, action) => state.setLoading(action.payload),
  [LOGIN_DATA_RESPONSE]: (state, action) => {
    return state.setUserInfo(action.payload)
  }
}

export default handleActions(actions, initialState);
