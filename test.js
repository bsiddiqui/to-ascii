'use strict'

var test = require('tape')
var toAscii = require('./')

test(function (t) {
  t.deepEqual(toAscii.encode('hello'), [104, 101, 108, 108, 111])
  t.equal(toAscii.decode([104, 101, 108, 108, 111]), 'hello')
  t.end()
})
