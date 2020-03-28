import { pathOr, construct, assocPath, or } from 'ramda'
function Authen(record) {
  this.isLoading = pathOr(false, ['isLoading'], record)
  this.userInfo = pathOr({}, ['userInfo'], record)
  this.isLogout = pathOr(false, ['isLogout'], record)
  this.isLoginFailure = pathOr(false, ['isLoginFailure'], record)
}
Authen.prototype = {
  setLoading: function(value) {
    return assocPath(['isLoading'], value, this)
  },
  setUserInfo: function(value) {
    return assocPath(['userInfo'], value, this)
  },
  setLogout: function(value) {
    return assocPath(['isLogout'], value, this)
  },
  setLoginFail: function(value) {
    return assocPath(['isLoginFailure'], value, this)
  }
}

export default construct(Authen)
