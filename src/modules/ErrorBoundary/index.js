import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { CModal } from '../../components'
import { Colors } from '../../utils'
import { styles } from './styled'

function ErrorBoundary(props) {
  const { errHandler, children } = props
  const { isError, message } = errHandler

  const [isShowModal, setShowModal] = useState(false)
  useEffect(() => {
    if (isError) {
      return setShowModal(true)
    }
  }, [isError])

  const renderModal = () => {
    if (isError) {
      return (
        <CModal
          isVisble={isShowModal}
          onHideModal={() => setShowModal(false)}
          message={message}
          iconName={'ios-warning'}
          iconColor={Colors.red}
        />
      )
    }
  }

  return (
    <View style={styles.wrapper}>
      {children}
      {renderModal()}
    </View>
  )
}

const mapStateToProps = state => ({
  errHandler: state.errHandler
})

export default connect(
  mapStateToProps,
  null
)(ErrorBoundary)

ErrorBoundary.propTypes = {
  errHandler: PropTypes.object,
  children: PropTypes.node
}
