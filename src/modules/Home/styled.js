import { StyleSheet } from 'react-native'
import { Colors } from '../../utils'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  backgroundImg: {
    flex: 1,
    paddingHorizontal: 20
  },
  messTextWrapper: {
    width: 260,
    height: 0,
    borderBottomWidth: 0,
    borderTopWidth: 35,
    borderTopColor: Colors.goldPrimary_2,
    borderLeftWidth: 0,
    borderRightWidth: 18,
    backgroundColor: Colors.transparent,
    borderLeftColor: Colors.transparent,
    borderRightColor: Colors.transparent,
    borderStyle: 'solid'
  },
  messBottomTextWrapper: {
    width: 170,
    height: 0,
    borderBottomWidth: 35,
    borderTopWidth: 0,
    borderTopColor: Colors.transparent,
    borderBottomColor: Colors.goldPrimary_2,
    borderLeftWidth: 18,
    borderRightWidth: 0,
    backgroundColor: Colors.transparent,
    borderLeftColor: Colors.transparent,
    borderRightColor: Colors.transparent,
    borderStyle: 'solid'
  },
  messText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 23,
    paddingLeft: 5,
    position: 'absolute',
    top: 3
  },
  topMess: {
    marginTop: 100
  },
  bottomMess: {
    position: 'absolute',
    bottom: 30,
    right: 15
  },
  secondTopMessWrapper: {
    width: 210,
    marginTop: 2
  },
  secondBottomMessWrapper: {
    marginTop: 2,
    width: 240
  },
  bottomMessText: {
    right: 5,
    top: 5
  },
  firstBottomMessWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
