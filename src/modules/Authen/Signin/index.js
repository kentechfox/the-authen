import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styled'
import Logo from '../../../assets/images/key.png'
import { Fonts, Routes } from '../../../utils'
import { Input, Button } from '../../../components'

function Signin(props) {
  const { navigation } = props
  const [indentifier, setIndentifier] = useState('')
  const [password, setPassword] = useState('')

  const renderLogo = () => {
    return <Image source={Logo} style={styles.logoImg} resizeMode={'contain'} />
  }

  const renderScreenName = () => {
    return <Text style={Fonts.headerName}>Sign in</Text>
  }

  const renderIdentifier = () => {
    return (
      <Input
        setInputvalue={value => setIndentifier(value)}
        inputValue={indentifier}
        placeholder={'Email / phone number'}
        customStyles={styles.input}
        iconName={'account-supervisor-circle'}
      />
    )
  }
  const renderPassword = () => {
    return (
      <Input
        setInputvalue={value => setPassword(value)}
        inputValue={password}
        placeholder={'Password'}
        isSecured
        iconName={'eye-off'}
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

  const renderLoginBtn = () => {
    return <Button title={'Log in'} customStyles={styles.loginBtn} />
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

  return (
    <View style={styles.wrapper}>
      {renderLogo()}
      {renderScreenName()}
      {renderIdentifier()}
      {renderPassword()}
      {renderForgotPass()}
      {renderLoginBtn()}
      <Text>or</Text>
      {renderLoginFb()}
      {renderSuggestSignup()}
    </View>
  )
}

export default Signin
