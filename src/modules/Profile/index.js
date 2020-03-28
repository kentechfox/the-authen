import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styled'
import { Button, Loading } from '../../components'
import { signOut } from '../Authen/reducers'

function Profile(props) {
  const { signOut, authen } = props
  const { isLoading } = authen

  const renderHeader = () => {
    // Avatar và tên của user chúng ta sẽ lấy từ firebase sau
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.userName}>Ken-san</Text>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'http://bit.ly/2vAzash'}}
            style={styles.avatar}
          />
        </View>
      </View>
    )
  }

  const renderAbout = () => {
    return (
      <Button
        title={'About'}
        customStyles={styles.btnStyle}
        customTitleStyle={styles.titleStyle}
      />
    )
  }
  const renderContact = () => {
    return (
      <Button
        title={'Contact'}
        customStyles={styles.btnStyle}
        customTitleStyle={styles.titleStyle}
      />
    )
  }
  const renderPorfolio = () => {
    return (
      <Button
        title={'Portfolio'}
        customStyles={styles.btnStyle}
        customTitleStyle={styles.titleStyle}
      />
    )
  }
  const renderSetting = () => {
    return (
      <Button
        title={'Setting'}
        customStyles={styles.btnStyle}
        customTitleStyle={styles.titleStyle}
      />
    )
  }
  const renderLogout = () => {
    return (
      <Button
        title={'Log out'}
        customStyles={styles.btnStyle}
        customTitleStyle={styles.titleStyle}
        onPress={() => signOut()}
      />
    )
  }

  return (
    <View style={styles.wrapper}>
      {renderHeader()}
      {renderAbout()}
      {renderContact()}
      {renderPorfolio()}
      {renderSetting()}
      {renderLogout()}
      <Loading isLoading={isLoading} />
    </View>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signOut
    },
    dispatch
  )
}
const mapStateToProps = state => ({
  authen: state.authen
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

Profile.propTypes = {
  signOut: PropTypes.func,
  authen: PropTypes.object
}