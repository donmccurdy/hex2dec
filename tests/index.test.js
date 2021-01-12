const test = require('tape');
const {hexToDec, decToHex} = require('../');

test('should convert small hex', (t) => {
  t.equals(hexToDec('FA'), '250', 'FA → 250');
  t.equals(hexToDec('0xFA'), '250', '0xFA → 250');
  t.equals(hexToDec('0x0'), '0', '0x0 → 0');
  t.end();
});

test('should convert long hex', (t) => {
  t.equals(
    hexToDec('0x89B6E64A8EC5FFFF'),
    '9923372036854775807',
    '0x89B6E64A8EC5FFFF → 9923372036854775807'
  );
  t.end();
});

test('should convert small decimal', (t) => {
  t.equals(decToHex('57'), '0x39', '57 → 0x39');
  t.equals(decToHex('0'), '0x0', '0 → 0x0');
  t.end();
});

test('should convert 128-bit decimal', (t) => {
  t.equals(
    decToHex('9923372036854775807'),
    '0x89b6e64a8ec5ffff',
    '9923372036854775807 → 0x89b6e64a8ec5ffff'
  );
  t.end();
});

test('should return null for invalid input', (t) => {
  t.equals(decToHex('ode to the boom'), null, 'nonsense');
  t.equals(decToHex('-750'), null, 'negative integer');
  t.equals(decToHex('0xFA'), null, 'hexadecimal');
  t.end();
});
