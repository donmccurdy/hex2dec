# hex2dec

[![Latest NPM release](https://img.shields.io/npm/v/hex2dec.svg)](https://www.npmjs.com/package/hex2dec)
[![Minzipped size](https://badgen.net/bundlephobia/minzip/hex2dec)](https://bundlephobia.com/result?p=hex2dec)
[![License](https://img.shields.io/npm/l/hex2dec.svg)](https://github.com/donmccurdy/hex2dec/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/donmccurdy/hex2dec.svg?branch=master)](https://travis-ci.com/donmccurdy/hex2dec)

Arbitrary precision decimal↔️hexadecimal converter, from a [blog post](http://www.danvk.org/hex2dec.html) by [Dan Vanderkam](https://github.com/danvk). Supports non-negative integer values.

## Usage

```
npm install --save hex2dec
```

```javascript
var converter = require('hex2dec');

var dec = converter.hexToDec('0xFA'); // 250
var hex = converter.decToHex('250'); // '0xfa'
var hexString = converter.decToHex('250', { prefix: false }); // 'fa'
```

## Why use hex2dec

`(250).toString(16) === 'fa'` and `250 === 0xFA` both work just fine, and will provide enough precision for most uses. For large (>64-bit) numbers, however, precision is lost. This utility provides a higher-precision alternative.

## License

This code may be used under the [Apache 2 license](https://github.com/donmccurdy/hex2dec/blob/master/LICENSE).
