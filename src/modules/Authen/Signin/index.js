import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styled'
import PropTypes from 'prop-types'

import Logo from '../../../assets/images/key.png'
import { Fonts, Routes, Constants } from '../../../utils'
import { Input, Button, WarningMess, Loading } from '../../../components'
import { signInAcc } from '../reducers'

function Signin(props) {
  const { navigation, authen, signInAcc } = props
  const { isLoading } = authen
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setEmailValid] = useState(true)
  const [isHidePass, setHidePass] = useState(true)

  const renderLogo = () => {
    return <Image source={Logo} style={styles.logoImg} resizeMode={'contain'} />
  }

  const renderScreenName = () => {
    return <Text style={Fonts.headerName}>Sign in</Text>
  }

  const renderEmail = () => {
    return (
      <Input
        setInputvalue={value => setEmail(value)}
        inputValue={email}
        placeholder={'Email'}
        customStyles={styles.input}
        iconName={'account-supervisor-circle'}
        value={email.toLowerCase()}
      />
    )
  }
  const renderPassword = () => {
    return (
      <Input
        setInputvalue={value => setPassword(value)}
        inputValue={password}
        placeholder={'Password'}
        // Nếu isHidePass === true, mật khẩu bị che,
        // ngược lại thì sẽ tiết lộ
        isSecured={isHidePass}
        iconName={isHidePass ? 'eye-off' : 'eye'}
        onPress={() => setHidePass(!isHidePass)}
      />
    )
  }

  const renderForgotPass = () => {
    return (
      <TouchableOpacity
        style={styles.fotgotPass}
        onPress={() => navigation.navigate(Routes.forgotPass)}
      >
        <Text style={styles.forgotPassTxt}>Forgot your password?</Text>
      </TouchableOpacity>
    )
  }

  function onSubmitLogin() {
    if (email.length) {
      // Dùng Regex để validate email, sẽ trả
      // về boolean. Bạn nào chưa quen với Regex
      // thì search để tìm hiểu thêm
      if (Constants.emailRegex.test(email)) {
        setEmailValid(true)
        signInAcc(email, password)
      } else {
        setEmailValid(false)
      }
    }
  }

  const renderLoginBtn = () => {
    return (
      <Button
        title={'Log in'}
        customStyles={styles.loginBtn}
        onPress={() => onSubmitLogin()}
      />
    )
  }

  const renderLoginFb = () => {
    return (
      <Button title={'Log in with Facebook'} customStyles={styles.loginFb} />
    )
  }

  const renderSuggestSignup = () => {
    return (
      <View style={styles.suggesWrapper}>
        <Text style={styles.question}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.signUp)}>
          <Text style={styles.suggest}>Sign up</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderWarning = () => {
    if (!isEmailValid) {
      return <WarningMess message={'Email format is invalid'} />
    }
  }

  return (
    <View style={styles.wrapper}>
      {renderLogo()}
      {renderScreenName()}
      {renderEmail()}
      {renderWarning()}
      {renderPassword()}
      {renderForgotPass()}
      {renderLoginBtn()}
      <Text>or</Text>
      {renderLoginFb()}
      {renderSuggestSignup()}
      <Loading isLoading={isLoading} />
    </View>
  )
}
const mapStateToProps = state => ({
  authen: state.authen
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signInAcc
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)
Signin.propTypes = {
  navigation: PropTypes.object,
  signInAcc: PropTypes.func,
  authen: PropTypes.object
}
