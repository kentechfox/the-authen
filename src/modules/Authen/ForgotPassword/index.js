import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styled'
import { Input, Button, WarningMess, Loading } from '../../../components'
import { Fonts, Colors, Constants } from '../../../utils'
import { forgotPass } from '../reducers'

function ForgotPassword(props) {
  const { navigation, forgotPass, authen } = props
  const { isLoading } = authen
  const [email, setEmail] = useState('')
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
    return (
      <Text style={[Fonts.headerName, styles.screenName]}>Forgot password</Text>
    )
  }

  const renderLovelyMessage = () => {
    return (
      <Text style={styles.message}>
        Please enter your email. We will send a reset password link to your
        mailbox!
      </Text>
    )
  }

  const renderEmail = () => {
    return (
      <Input
        setInputvalue={value => setEmail(value)}
        inputValue={email}
        placeholder={'Email'}
        value={email.toLowerCase()}
      />
    )
  }

  function onSubmitResetPassword() {
    if (email.length) {
      if (Constants.emailRegex.test(email)) {
        setEmailValid(true)
        forgotPass(email)
      } else {
        setEmailValid(false)
      }
    }
  }

  const renderForgotBtn = () => {
    return (
      <Button
        title={'Send'}
        customStyles={styles.forgotBtn}
        onPress={() => onSubmitResetPassword()}
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
      {renderLovelyMessage()}
      {renderEmail()}
      {renderWarning()}
      {renderForgotBtn()}
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
      forgotPass
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)

ForgotPassword.propTypes = {
  navigation: PropTypes.object,
  forgotPass: PropTypes.func,
  authen: PropTypes.object
}
