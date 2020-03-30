import { pathOr, construct, mergeLeft } from 'ramda'

function Model (record) {
  this.isError = pathOr(false, ['isError'], record)
  this.message = pathOr('', ['message'], record)
}

Model.prototype = {
  setOtherError: function (data) {
    return mergeLeft(data, this)
  },
  setIsNotFound: function (data) {
    return mergeLeft(data, this)
  },
  setPasswordInvalid: function (data) {
    return mergeLeft(data, this)
  },
  setEmailExist: function (data) {
    return mergeLeft(data, this)
  },
  setPasswordWrong: function (data) {
    return mergeLeft(data, this)
  }
}

export default construct(Model)
