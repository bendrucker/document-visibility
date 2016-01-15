'use strict'

module.exports = keys

function keys (document) {
  var prefix = detectPrefix(document)
  if (prefix == null) return
  return {
    hidden: lowercaseFirst(prefix + 'Hidden'),
    event: prefix + 'visibilitychange'
  }
}

function detectPrefix (document) {
  if (document.hidden != null) return ''
  if (document.mozHidden != null) return 'moz'
  if (document.msHidden != null) return 'ms'
  if (document.webkitHidden != null) return 'webkit'
}

function lowercaseFirst (string) {
  return string.substring(0, 1).toLowerCase() + string.substring(1)
}
