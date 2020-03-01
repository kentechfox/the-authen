import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'

import { styles } from './styled'
import { Colors } from '../../utils'

function Input(props) {
  const {
    setInputvalue,
    isSecured,
    inputValue,
    placeholder,
    customStyles,
    iconName,
    onPress
  } = props

  return (
    <View style={[styles.inputWrapper, customStyles]}>
      <TextInput
        style={styles.input}
        underlineColorAndroid={Colors.transparent}
        onChangeText={setInputvalue}
        secureTextEntry={isSecured}
        value={inputValue}
        placeholder={placeholder}
        placeholderTextColor={Colors.goldPrimary_2}
        {...props}
      />
      {/* Có iconName thì mới render Icon */}
      {iconName && (
        <Icon
          name={iconName}
          color={Colors.goldPrimary_2}
          size={24}
          onPress={onPress}
        />
      )}
    </View>
  )
}

Input.propTypes = {
  setInputvalue: PropTypes.func,
  isSecured: PropTypes.bool,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string,
  customStyles: PropTypes.object,
  iconName: PropTypes.string,
  onPress: PropTypes.func
}

export default Input
