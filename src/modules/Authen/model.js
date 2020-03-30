import { pathOr, construct, assocPath, or } from 'ramda'
function Authen(record) {
  this.isLoading = pathOr(false, ['isLoading'], record)
  this.userInfo = pathOr({}, ['userInfo'], record)
  this.isForgot = pathOr(false, ['isForgot'], record)
}
Authen.prototype = {
  setLoading: function(value) {
    return assocPath(['isLoading'], value, this)
  },
  setUserInfo: function(value) {
    return assocPath(['userInfo'], value, this)
  },
  setForgotPass: function(value) {
    return assocPath(['isForgot'], value, this)
  }
}

export default construct(Authen)
