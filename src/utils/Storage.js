import AsyncStorage from '@react-native-community/async-storage'

async function set(key, data) {
  const jsonData = JSON.stringify(data)

  try {
    await AsyncStorage.setItem(key, jsonData)
  } catch (e) {
    /* Alert error */
  }
}

async function get(key) {
  try {
    const jsonData = await AsyncStorage.getItem(key)
    return JSON.parse(jsonData)
  } catch (e) {
    /* Alert error */

    return null
  }
}

async function remove(key) {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (error) {
    return null
  }
}

function clear() {
  AsyncStorage.clear()
}

export default {
  set,
  get,
  remove,
  clear
}
