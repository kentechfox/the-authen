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
import { setResetErrorState } from '../ErrorBoundary/action-types'
import FBSDK from 'react-native-fbsdk'

const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK

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
      const userResponse = userData.data()
      const credential = firebase.auth.EmailAuthProvider.credential(
        email,
        password
      )
      const userInfo = {
        email: userResponse.email,
        fullName: userResponse.fullName,
        avatar: '',
        credential
      }
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

/**
|--------------------------------------------------
| LOGIN WITH FACEBOOK
|--------------------------------------------------
*/

export const loginWithFacebook = () => async dispatch => {
  dispatch(setLoading(true))
  try {
    const loginResult = await LoginManager.logInWithPermissions([
      'public_profile'
    ])

    if (loginResult.isCancelled) {
      console.log('CANCEL')
    } else {
      const tokenData = await AccessToken.getCurrentAccessToken()
      await firebaseAuth.signInWithCredential(
        firebase.auth.FacebookAuthProvider.credential(tokenData.accessToken)
      )
      const infoRequest = new GraphRequest(
        '/me',
        {
          parameters: {
            fields: {
              string: 'id, name, email, picture.type(large)'
            }
          }
        },
        async function(error, result) {
          if (error) {
            console.log('Error fetching data: ' + JSON.stringify(error))
          } else {
            const graphResult = JSON.stringify(result)
            const userParse = JSON.parse(graphResult)
            const { name, picture, email, id } = userParse
            await Storage.set(
              Constants.storageKey.auth.USER_INFO_STORAGE_KEY,
              userParse
            )
            const userInfo = {
              email: email || '',
              fullName: name || '',
              avatar: picture.data.url || '',
              credential: id
            }
            await Storage.set(
              Constants.storageKey.auth.USER_INFO_STORAGE_KEY,
              userInfo
            )
            dispatch(setLoginDataResponse(userInfo))
          }
        }
      )
      new GraphRequestManager().addRequest(infoRequest).start()
    }
  } catch (error) {
    console.log('CHECK ERRR', error)
    RequestHandler(error, dispatch)
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
