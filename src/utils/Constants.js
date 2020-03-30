// Dimensions
import { Platform, Dimensions } from 'react-native'

export const isIphoneX = () => {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  )
}

export const isIphoneXsMax = () => {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 896 || dimen.width === 896)
  )
}

const getNavPadding = () => {
  if (isIphoneX() || isIphoneXsMax()) {
    return 40
  } else if (Platform.OS === 'ios') {
    return 20
  }
  return 0
}

export default {
  storageKey: {
    auth: {
      USER_INFO_STORAGE_KEY: 'auth:userInfoStorage'
    }
  },
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}