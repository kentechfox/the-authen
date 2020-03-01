import { StyleSheet } from 'react-native'
import { Colors } from '../../utils'

export const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    height: 43,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.goldPrimary_1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  input: {
    color: Colors.goldPrimary,
    width: '85%'
  }
})