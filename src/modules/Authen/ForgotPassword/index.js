import React, { useState } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styled'
import { Input, Button } from '../../../components'
import { Fonts, Colors } from '../../../utils'

function ForgotPassword(props) {
  const { navigation } = props
  const [email, setEmail] = useState('')


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
    return (
      <Text style={[Fonts.headerName, styles.screenName]}>Forgot password</Text>
    )
  }

  const renderLovelyMessage = () => {
    return (
      <Text style={styles.message}>
        Please enter your email. We will send a reset password link to your mailbox!
      </Text>
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

  const renderForgotBtn = () => {
    return <Button title={'Send'} customStyles={styles.forgotBtn} />
  }
  return (
    <View style={styles.wrapper}>
      {renderBackIcon()}
      {renderScreenName()}
      {renderLovelyMessage()}
      {renderEmail()}
      {renderForgotBtn()}
    </View>
  )
}

ForgotPassword.propTypes = {
  navigation: PropTypes.object
}

export default ForgotPassword
