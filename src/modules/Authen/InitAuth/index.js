import React from 'react'
import PropTypes from 'prop-types'

import { Loading } from '../../../components'

function InitAuth(props) {
  const { isLoading } = props
  return <Loading isLoading={isLoading} />;
}

export default InitAuth

InitAuth.propTypes = {
  isLoading: PropTypes.bool
}
