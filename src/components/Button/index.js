import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styled'

function Button(props) {
  const { onPress, title, customStyles } = props
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, customStyles]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  customStyles: PropTypes.object
}

export default Button
