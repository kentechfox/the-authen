import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Ionicons'
import Button from '../Button'
import { styles } from './styled'

function CModal(props) {
  const { isVisble, onHideModal, message, iconName, iconColor } = props

  return (
    <Modal
      isVisible={isVisble}
      backdropTransitionOutTiming={0}
      animationInTiming={700}
    >
      <View style={styles.wrapper}>
        <Icon name={iconName} color={iconColor} size={40} />
        <Text style={styles.text}>{message}</Text>
        <Button
          title={'OK'}
          customStyles={styles.modalBtn}
          onPress={onHideModal}
        />
      </View>
    </Modal>
  )
}

export default CModal

CModal.propTypes = {
  isVisble: PropTypes.bool,
  children: PropTypes.node,
  message: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  onHideModal: PropTypes.func
}
