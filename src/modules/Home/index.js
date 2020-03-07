import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from './styled'
import Car from '../../assets/images/car.jpg'

function Home(props) {
  const renderTopMess = () => {
    return (
      <View style={styles.topMess}>
        <View>
          <View style={styles.messTextWrapper} />
          <Text style={styles.messText}>Welcome to the world</Text>
        </View>
        <View>
          <View style={[styles.messTextWrapper, styles.secondTopMessWrapper]} />
          <Text style={styles.messText}>of authenticators</Text>
        </View>
      </View>
    )
  }

  const renderBottomMess = () => {
    return (
      <View style={styles.bottomMess}>
        <View style={styles.firstBottomMessWrapper}>
          <View style={styles.messBottomTextWrapper} />
          <Text style={[styles.messText, styles.bottomMessText]}>
            Are you ready
          </Text>
        </View>

        <View>
          <View
            style={[
              styles.messBottomTextWrapper,
              styles.secondBottomMessWrapper
            ]}
          />
          <Text style={[styles.messText, styles.bottomMessText]}>
            for the next journey?
          </Text>
        </View>
      </View>
    )
  }

  const renderBackgroundImg = () => {
    return (
      <ImageBackground source={Car} style={styles.backgroundImg}>
        {renderTopMess()}
        {renderBottomMess()}
      </ImageBackground>
    )
  }

  return <View style={styles.wrapper}>{renderBackgroundImg()}</View>
}

export default Home
