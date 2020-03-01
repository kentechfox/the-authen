import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { styles } from './styled'
import Logo from '../../../assets/images/key.png'
import { Fonts, Colors } from '../../../utils'
import { Input } from '../../../components'

function Signin(props) {
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
        customStyles={{ marginTop: 40 }}
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

  return (
    <View style={styles.wrapper}>
      {renderLogo()}
      {renderScreenName()}
      {renderIdentifier()}
      {renderPassword()}
    </View>
  )
}

export default Signin
