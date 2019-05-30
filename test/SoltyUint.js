// const { SoltyUint } = require('../js/classes/SoltyUint')
// const { expect } = require('chai')
//
// describe('SoltyUint', () => {
  // describe('instantiation', () => {
  //   it('should instatiate empties', () => {
  //     new SoltyUint(8, new Uint8Array([]))
  //     new SoltyUint(16, new Uint8Array([]))
  //     new SoltyUint(256, new Uint8Array([]))
  //   })
  //   it('should instatiate partials', () => {
  //     new SoltyUint(16, new Uint8Array([0]))
  //     new SoltyUint(256, new Uint8Array([255]))
  //   })
  //   it('should instatiate fulls', () => {
  //     new SoltyUint(16, new Uint8Array([0, 0]))
  //     new SoltyUint(256, (new Uint8Array(32)).fill(1))
  //   })
  // })
  // describe('random', () => {
  //   it('should getRandoms', () => {
  //     SoltyUint.getRandom(8).uint8Array.should.have.length(1)
  //     SoltyUint.getRandom(16).uint8Array.should.have.length(2)
  //   })
  // })
  // describe('fromHexp', () => {
  //   it('should fromHexu', () => {
  //     SoltyUint.fromHexu(8, '').getArray().should.deep.equal([0])
  //   })
  // })

  // it('should instantiate from [0, .., 0]', () => {
  //   soltyAddress0 = new SoltyAddress((new Uint8Array(20)).fill(0))
  // })
  // it('should instantiate from [1, .., 1]', () => {
  //   soltyAddress1 = new SoltyAddress((new Uint8Array(20)).fill(1))
  // })
  // it('soltyAddress0 and soltyAddress1 should not be equal', () => {
  //   soltyAddress0.equals(soltyAddress1).should.equal(false)
  // })
  // it('soltyAddress0 and soltyAddress0 should be equal', () => {
  //   soltyAddress0.equals(soltyAddress0).should.equal(true)
  // })
  // it('getRandom', () => {
  //   SoltyAddress.getRandom().should.be.instanceOf(SoltyAddress)
  // })
  // it('should throw InvalidAddressLengthError', () => {
  //   expect(() => {
  //     new SoltyAddress((new Uint8Array(21)).fill(0))
  //   }).to.throw().an.instanceOf(InvalidAddressLengthError)
  //   expect(() => {
  //     SoltyAddress.fromHexu('')
  //     console.log(SoltyAddress.fromHexu(''))
  //   }).to.throw().an.instanceOf(InvalidAddressLengthError)
  //   expect(() => {
  //     SoltyAddress.fromHexu('00')
  //   }).to.throw().an.instanceOf(InvalidAddressLengthError)
  //   expect(() => {
  //     SoltyAddress.fromHexp('0x')
  //     console.log(SoltyAddress.fromHexu(''))
  //   }).to.throw().an.instanceOf(InvalidAddressLengthError)
  //   expect(() => {
  //     SoltyAddress.fromHexp('0x00')
  //   }).to.throw().an.instanceOf(InvalidAddressLengthError)
  // })

// })
