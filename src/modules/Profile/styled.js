import { StyleSheet } from 'react-native'
import { Colors } from '../../utils'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 80,
  },
  btnStyle: {
    backgroundColor: Colors.goldPrimary_1,
    height: 45,
    borderRadius: 0,
    marginBottom: 30
  },
  titleStyle: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 18
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 60
  },
  userName: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.black,
    marginRight: 10
  },
  avatarWrapper: {
    borderRadius: 26,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})
