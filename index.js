'use strict'

const re = new RegExp()
// v8 4.9+
if (re.hasOwnProperty('flags')) {
  module.exports = function reFlags(r) {
    return r.flags
  }
} else {
  module.exports = function reFlags(r) {
    let out = ''
    if (r.global) out += 'g'
    if (r.ignoreCase) out += 'i'
    if (r.multiline) out += 'm'
    if (r.unicode) out += 'u'
    if (r.sticky) out += 'y'
    return out
  }
}
