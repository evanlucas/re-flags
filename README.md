# re-flags

[![Build Status](https://travis-ci.org/evanlucas/re-flags.svg)](https://travis-ci.org/evanlucas/re-flags)
[![Coverage Status](https://coveralls.io/repos/evanlucas/re-flags/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/re-flags?branch=master)

Get the flags from a RegExp

## Install

```bash
$ npm install [--save] re-flags
```

## Usage

```js
const reFlags = require('re-flags')
const re = /^foo$/gi
console.log(reFlags(re))
// => 'gi'
```

## Test

```bash
$ npm test
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
