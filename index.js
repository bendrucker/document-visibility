'use strict'

var document = require('global/document')
var Event = require('geval')
var Keys = require('./keys')

module.exports = Visibility

function Visibility () {
  var keys = Keys(document)
  if (!keys) return noopShim()

  return {
    visible: visible,
    onChange: Event(listen)
  }

  function visible () {
    return !document[keys.hidden]
  }

  function listen (broadcast) {
    document.addEventListener(keys.event, function onVisibilityChange () {
      broadcast(visible())
    })
  }
}

function noopShim () {
  return {
    visible: function () {
      return true
    },
    onChange: noop
  }
}

function noop () {
  return noop
}
