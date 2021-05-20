import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styled'
import { Colors } from '../../utils'

function Loading(props) {
  const { isLoading } = props
  if (isLoading) {
    return (
      <View style={styles.wrapperss}>
        <ActivityIndicator color={Colors.grayPrimary_1} size={'large'} />
      </View>
    )
  }
  return null
}

Loading.propTypes = {
  isLoading: PropTypes.bool
}

export default Loading
