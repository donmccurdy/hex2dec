var chai = require('chai'),
    expect = chai.expect,
    util = require('../');

describe('hex2dec', function() {
  it('should convert small hex', function () {
    expect(util.hexToDec('FA')).to.equal('250');
    expect(util.hexToDec('0xFA')).to.equal('250');
  });

  it('should convert long hex', function () {
    expect(util.hexToDec('0x89B6E64A8EC5FFFF')).to.equal('9923372036854775807');
  });

  it('should convert small decimal', function () {
    expect(util.decToHex('57')).to.equal('0x39');
  });

  it('should convert 128-bit decimal', function () {
    expect(util.decToHex('9923372036854775807')).to.equal('0x89b6e64a8ec5ffff');
  });

  it('should return null for invalid input', function () {
    expect(util.decToHex('ode to the boom')).to.be.null;
    expect(util.decToHex('-750')).to.be.null;
    expect(util.decToHex('0xFA')).to.be.null;
  });
});
