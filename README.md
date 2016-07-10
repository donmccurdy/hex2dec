# hex2dec

Arbitrary precision decimal↔️hexadecimal converter, from a [blog post](http://www.danvk.org/hex2dec.html) by [Dan Vanderkam](https://github.com/danvk).

## Usage

```
npm install --save hex2dec
```

```javascript
var converter = require('hex2dec');

var hex = converter.hexToDec('0xFA'); // 250
var dec = converter.decToHex('250'); // '0xfa'
```

## Why use hex2dec

`(250).toString(16) === 'fa'` and `250 === 0xFA` both work just fine, and will provide enough precision for most uses. For large (>64-bit) numbers, however, precision is lost. This utility provides a higher-precision alternative.

## License

This code may be used under the [Apache 2 license](https://github.com/donmccurdy/hex2dec/blob/master/LICENSE).
