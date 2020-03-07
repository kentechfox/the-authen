import { StyleSheet } from 'react-native'
import { Colors } from '../../../utils'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal: 30
  },
  logoImg: {
    width: 82,
    height: 82
  },
  input: {
    marginTop: 40
  },
  fotgotPass: {
    alignSelf: 'flex-end',
    marginTop: -15
  },
  forgotPassTxt: {
    color: Colors.grayPrimary
  },
  loginBtn: {
    marginBottom: 15,
    marginTop: 40
  },
  loginFb: {
    backgroundColor: Colors.bluePrimary,
    marginTop: 20
  },
  suggesWrapper: {
    flexDirection: 'row',
    marginTop: 30
  },
  question: {
    fontWeight: '600',
    color: Colors.grayPrimary
  },
  suggest: {
    color: Colors.goldPrimary,
    fontWeight: '600',
    marginLeft: 5
  }
})
