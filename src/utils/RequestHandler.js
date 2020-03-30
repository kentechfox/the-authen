import {
  setIsNotFound,
  setIsOtherErorr,
  setIsPasswordValid,
  setIsEmailExist,
  setIsPasswordWrong
} from '../modules/ErrorBoundary/action-type'

function RequestHandler(errorCode, dispatch) {
  function otherError() {
    return dispatch(
      setIsOtherErorr({
        isError: true,
        message: 'System Error! Please try again!'
      })
    )
  }

  function userNotFound() {
    return dispatch(
      setIsNotFound({
        isError: true,
        message: 'User not found! Please try again!',
      })
    )
  }

  function emailExist() {
    return dispatch(
      setIsEmailExist({
        isError: true,
        message: 'This email already exists!'
      })
    )
  }

  function passwordInvalid() {
    return dispatch(
      setIsPasswordValid({
        isError: true,
        message: 'Password must be least six characters!'
      })
    )
  }
  function passwordWrong() {
    return dispatch(
      setIsPasswordWrong({
        isError: true,
        message: 'Password is wrong! Please try again!'
      })
    )
  }

  switch (errorCode) {
    case 'auth/user-not-found':
      userNotFound()
      break
    case 'auth/email-already-in-use':
      emailExist()
      break
    case 'auth/weak-password':
      passwordInvalid()
      break
    case 'auth/wrong-password':
      passwordWrong()
      break
    default:
      otherError()
      break
  }
}

export default RequestHandler
