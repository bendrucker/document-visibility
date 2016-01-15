'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var EventTarget = require('dom-event-target')
var Keys = require('./keys')

test('supported', function (t) {
  t.plan(3)

  var document = new EventTarget()
  document.hidden = false

  var Visibility = proxyquire('./', {
    'global/document': document
  })

  var visibility = Visibility()

  t.equal(visibility.visible(), true)

  visibility.onChange(function (visible) {
    t.equal(visible, false)
  })

  document.hidden = true
  document.send('visibilitychange')

  t.equal(visibility.visible(), false)
})

test('unsupported', function (t) {
  var Visibility = proxyquire('./', {
    'global/document': {}
  })

  var visibility = Visibility()

  t.equal(visibility.visible(), true)
  t.doesNotThrow(visibility.onChange.bind(null, Boolean))

  t.end()
})

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
