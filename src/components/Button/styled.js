import { StyleSheet } from 'react-native'
import { Colors } from '../../utils'

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.goldPrimary_1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20
  },

  title: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 15
  }
})