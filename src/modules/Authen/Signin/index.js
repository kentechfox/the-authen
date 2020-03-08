import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styled'
import PropTypes from 'prop-types'

import Logo from '../../../assets/images/key.png'
import { Fonts, Routes, Constants } from '../../../utils'
import { Input, Button, WarningMess } from '../../../components'

function Signin(props) {
  const { navigation } = props
  const [identifier, setidentifier] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setEmailValid] = useState(true)
  const [isHidePass, setHidePass] = useState(true)

  const renderLogo = () => {
    return <Image source={Logo} style={styles.logoImg} resizeMode={'contain'} />
  }

  const renderScreenName = () => {
    return <Text style={Fonts.headerName}>Sign in</Text>
  }

  const renderIdentifier = () => {
    return (
      <Input
        setInputvalue={value => setidentifier(value)}
        inputValue={identifier}
        placeholder={'Email'}
        customStyles={styles.input}
        iconName={'account-supervisor-circle'}
        value={identifier.toLowerCase()}
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
    if (identifier.length) {
      // Dùng Regex để validate email, sẽ trả
      // về boolean. Bạn nào chưa quen với Regex
      // thì search để tìm hiểu thêm
      if (Constants.emailRegex.test(identifier)) {
        setEmailValid(true)
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
      {renderIdentifier()}
      {renderWarning()}
      {renderPassword()}
      {renderForgotPass()}
      {renderLoginBtn()}
      <Text>or</Text>
      {renderLoginFb()}
      {renderSuggestSignup()}
    </View>
  )
}

Signin.propTypes = {
  navigation: PropTypes.object
}

export default Signin
