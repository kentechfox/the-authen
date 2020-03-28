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
  layout: {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    navPadding: getNavPadding()
  },
  chill: {
    progress: {
      width: Dimensions.get('window').width / 3 - 5,
      height: 3
    }
  },
  drawerAnimation: {
    timeAnimateDuration: 200
  },
  fonts: {
    fontFamily: 'Roboto Slab'
  },
  host: {
    requestTimeout: 30000,
    deadline: 30000,
    retry: 3
  },
  storageKey: {
    auth: {
      PETOWN_STORAGE_KEY: 'auth:petownStorage',
      LANGUAGE_STORAGE_KEY: 'auth:languageStorage',
      USER_INFO_STORAGE_KEY: 'auth:userInfoStorage',
      PLAYER_ID: 'auth:playerIdStorage'
    },
    server: {
      HOST_STORAGE_KEY: 'server:hostStorage'
    }
  },
  emptyValue: {
    string: '',
    nil: null
  },
  languages: {
    'vi-VN': [
      {
        label: 'Tiếng Việt',
        value: 'vi-VN',
        drawer: 'VN',
        prefix: ''
      },
      {
        label: 'Tiếng Anh',
        value: 'en-US',
        drawer: 'EN',
        prefix: 2
      }
    ],
    'en-US': [
      {
        label: 'Vietnamese',
        value: 'vi-VN',
        drawer: 'VN',
        prefix: ''
      },
      {
        label: 'English',
        value: 'en-US',
        drawer: 'EN',
        prefix: 2
      }
    ]
  },
  company: {
    website: {
      url: 'https://petown.co',
      label: 'www.petown.co'
    }
  },

  urlRegex: /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneRegex: /(9|5|8|7|3|07|08|03|05|09|01[2|6|8|9])+([0-9]{8})\b/
}
