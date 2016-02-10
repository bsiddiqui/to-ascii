'use strict'

let encode = (string) => {
  return string.split('')
  .map(c => c.charCodeAt(0))
}

let decode = (array) => {
  return array.reduce((previous, current) => previous + String.fromCharCode(current), '')
}

module.exports = {
  encode,
  decode
}
