import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styled'

function WarningMess(props) {
  const { message, customStyle } = props

  return <Text style={[styles.message, customStyle]}>{message}</Text>
}

WarningMess.propTypes = {
  message: PropTypes.string,
  customStyle: PropTypes.object
}

export default WarningMess
