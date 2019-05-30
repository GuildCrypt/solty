const { Solty } = require('../js/classes/Solty')
const { expect } = require('chai')
const { OddHexLengthError } = require('../js/utils/convertHexuToUint8Array')
const { HexpUnprefixedError } = require('../js/utils/convertHexpToHexu')

const params = [
  [
    [],
    '',
    '0x'
  ],
  [
    [0],
    '00',
    '0x00'
  ],
  [
    [0, 1, 2],
    '000102',
    '0x000102'
  ],
  [
    [0, 255],
    '00ff',
    '0x00ff'
  ]
]

describe('Solty', () => {
  params.forEach((param) => {
    describe(`[${param[0]}]`, () => {
      let solty
      it('should instatiate', () => {
        solty = new Solty(new Uint8Array(param[0]))
      })
      it(`solty.getHexu should equal ${param[1]}`, () => {
        solty.getHexu().should.equal(param[1])
      })
      it(`solty.getHexp should equal ${param[2]}`, () => {
        solty.getHexp().should.equal(param[2])
      })
      it(`Solty.fromHexu "${param[1]}" should equal [${param[0]}]`, () => {
        Solty.fromHexu(param[1]).equals(solty).should.equal(true)
      })
      it(`Solty.fromHexp "${param[2]}" should equal [${param[0]}]`, () => {
        Solty.fromHexp(param[2]).equals(solty).should.equal(true)
      })
    })
  })
  describe('empty', () => {
    it('Solty.fromHexu "" should equal []', () => {
      Solty.fromHexu('').getArray().should.deep.equal([])
    })
    it('Solty.fromHexp "0x" should equal []', () => {
      Solty.fromHexu('').getArray().should.deep.equal([])
    })
  })
  describe('OddHexLengthError', () => {
    it('Solty.fromHexu "0" should throw OddHexLengthError', () => {
      expect(() => {
        Solty.fromHexu('0')
      }).to.throw().an.instanceOf(OddHexLengthError)
    })
    it('Solty.fromHexu "000" should throw OddHexLengthError', () => {
      expect(() => {
        Solty.fromHexu('000')
      }).to.throw().an.instanceOf(OddHexLengthError)
    })
  })
  describe('OddHexLengthError', () => {
    it('Solty.fromHexu "0" should throw OddHexLengthError', () => {
      expect(() => {
        Solty.fromHexu('0')
      }).to.throw().an.instanceOf(OddHexLengthError)
    })
    it('Solty.fromHexu "000" should throw OddHexLengthError', () => {
      expect(() => {
        Solty.fromHexu('000')
      }).to.throw().an.instanceOf(OddHexLengthError)
    })
    it('Solty.fromHexp "0x0" should throw OddHexLengthError', () => {
      expect(() => {
        Solty.fromHexp('0x0')
      }).to.throw().an.instanceOf(OddHexLengthError)
    })
    it('Solty.fromHexp "000" should throw OddHexLengthError', () => {
      expect(() => {
        Solty.fromHexu('0x000')
      }).to.throw().an.instanceOf(OddHexLengthError)
    })

  })
  describe('HexpUnprefixedError', () => {
    it('Solty.fromHexp "" should throw HexpUnprefixedError', () => {
      expect(() => {
        Solty.fromHexp('')
      }).to.throw().an.instanceOf(HexpUnprefixedError)
    })
    it('Solty.fromHexp "0" should throw HexpUnprefixedError', () => {
      expect(() => {
        Solty.fromHexp('0')
      }).to.throw().an.instanceOf(HexpUnprefixedError)
    })
    it('Solty.fromHexp "000" should throw HexpUnprefixedError', () => {
      expect(() => {
        Solty.fromHexp('000')
      }).to.throw().an.instanceOf(HexpUnprefixedError)
    })
  })
  describe('equals', () => {
    it('should be false for unequal lengths', () => {
      Solty.fromHexu('').equals(Solty.fromHexu('00')).should.equal(false)
      Solty.fromHexu('00').equals(Solty.fromHexu('')).should.equal(false)
    })
    it('should be false for unequal values', () => {
      Solty.fromHexu('01').equals(Solty.fromHexu('00')).should.equal(false)
      Solty.fromHexu('00').equals(Solty.fromHexu('01')).should.equal(false)
    })
    it('should be true when equal', () => {
      Solty.fromHexu('').equals(Solty.fromHexu('')).should.equal(true)
      Solty.fromHexu('00').equals(Solty.fromHexu('00')).should.equal(true)
    })

  })
})
