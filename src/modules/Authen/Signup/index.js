import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styled'
import { Input, Button, Loading, WarningMess } from '../../../components'
import { Fonts, Colors, Constants } from '../../../utils'
import { signUpAcc } from '../reducers'

function Signup(props) {
  const { navigation, signUpAcc, authen } = props
  const { isLoading } = authen
  const [fullName, setFullName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setEmailValid] = useState(true)

  const renderBackIcon = () => {
    return (
      <Icon
        name='ios-arrow-back'
        color={Colors.grayPrimary}
        size={35}
        onPress={() => navigation.goBack()}
      />
    )
  }

  const renderScreenName = () => {
    return <Text style={[Fonts.headerName, styles.screenName]}>Sign up</Text>
  }

  const renderFullName = () => {
    return (
      <Input
        setInputvalue={value => setFullName(value)}
        placeholder={'Full Name'}
        customStyles={styles.input}
      />
    )
  }

  const renderPhoneNum = () => {
    return (
      <Input
        setInputvalue={value => setPhoneNum(value)}
        inputValue={phoneNum}
        placeholder={'Phone number'}
        keyboardType={'phone-pad'}
      />
    )
  }

  const renderEmail = () => {
    return (
      <Input
        setInputvalue={value => setEmail(value)}
        inputValue={email.toLowerCase()}
        placeholder={'Email'}
      />
    )
  }

  const renderPassword = () => {
    return (
      <Input
        setInputvalue={value => setPassword(value)}
        inputValue={password}
        isSecured
        placeholder={'Password'}
      />
    )
  }
  function onSubmitSignup() {
    if (email.length) {
      if (Constants.emailRegex.test(email)) {
        setEmailValid(true)
        signUpAcc(email, password, phoneNum, fullName, navigation)
      } else {
        setEmailValid(false)
      }
    }
  }
  const renderSignupBtn = () => {
    return (
      <Button
        title={'Sign up'}
        customStyles={styles.signupBtn}
        onPress={() => onSubmitSignup()}
      />
    )
  }
  const renderWarning = () => {
    if (!isEmailValid) {
      return <WarningMess message={'Email format is invalid'} />
    }
  }

  return (
    <View style={styles.wrapper}>
      {renderBackIcon()}
      {renderScreenName()}
      {renderFullName()}
      {renderPhoneNum()}
      {renderEmail()}
      {renderWarning()}
      {renderPassword()}
      {renderSignupBtn()}
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
      signUpAcc
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

Signup.propTypes = {
  navigation: PropTypes.object,
  authen: PropTypes.object,
  signUpAcc: PropTypes.func
}
