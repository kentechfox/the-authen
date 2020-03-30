import { StyleSheet } from 'react-native'
import { Colors } from '../../utils'

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    marginHorizontal: 20,
    height: 185,
    paddingTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 10,
    color: Colors.grayPrimary,
    width: '80%'
  },
  modalBtn: {
    borderRadius: 5,
    height: 40,
    width: '50%',
    marginTop: 15
  }
})