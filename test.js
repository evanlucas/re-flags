'use strict'

const test = require('tap').test
const flags = require('./')

test('flags', (t) => {
  function tryFlag(re, exp, desc) {
    try {
      t.equal(flags(new RegExp(re, exp)), exp)
    } catch (err) {
      if (/Invalid flags/.test(err.message)) {
        t.pass(desc)
      } else {
        throw err
      }
    }
  }

  t.equal(flags(/a/g), 'g')
  t.equal(flags(/a/i), 'i')
  t.equal(flags(/a/m), 'm')
  tryFlag('a', 'u', 'unicode flag not supported')
  tryFlag('a', 'y', 'sticky flag not supported')

  t.equal(flags(/a/gi), 'gi')
  t.equal(flags(/a/ig), 'gi')
  t.equal(flags(/a/gim), 'gim')
  t.equal(flags(/a/igm), 'gim')
  t.equal(flags(/a/img), 'gim')
  t.equal(flags(/a/gmi), 'gim')
  t.equal(flags(/a/im), 'im')
  t.equal(flags(/a/mi), 'im')

  t.end()
})
