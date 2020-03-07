import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styled'
import { Button } from '../../components'

function Profile(props) {

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
    </View>
  )
}

export default Profile
