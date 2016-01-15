'use strict'

var test = require('tape')
var Visibility = require('./')
var Keys = require('./keys')

test('keys', function (t) {
  t.notOk(Keys({}))
  t.deepEqual(Keys({hidden: false}), {
    hidden: 'hidden',
    event: 'visibilitychange'
  })
  t.deepEqual(Keys({webkitHidden: false}), {
    hidden: 'webkitHidden',
    event: 'webkitvisibilitychange'
  })
  t.end()
})
