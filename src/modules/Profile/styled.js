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
    width: 40,
    height: 40,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19
  }
})
