import React, { useState } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styled'
import { Input, Button } from '../../../components'
import { Fonts, Colors } from '../../../utils'

function Signup(props) {
  const { navigation } = props
  const [fullName, setFullName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        inputValue={fullName}
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
        inputValue={email}
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

  const renderSignupBtn = () => {
    return <Button title={'Sign up'} customStyles={styles.signupBtn} />
  }
  return (
    <View style={styles.wrapper}>
      {renderBackIcon()}
      {renderScreenName()}
      {renderFullName()}
      {renderPhoneNum()}
      {renderEmail()}
      {renderPassword()}
      {renderSignupBtn()}
    </View>
  )
}

Signup.propTypes = {
  navigation: PropTypes.object
}

export default Signup
