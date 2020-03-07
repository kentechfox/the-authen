import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styled'

function Button(props) {
  const { onPress, title, customStyles, customTitleStyle, isDisabled } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, customStyles]}
      disabled={isDisabled}
    >
      <Text style={[styles.title, customTitleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  customStyles: PropTypes.object,
  customTitleStyle: PropTypes.object,
  isDisabled: PropTypes.bool
}

export default Button
