const { SoltyAddress } = require('../js/Solty/Address')
const { InvalidBytesLengthError } = require('../js/classes/InvalidBytesLengthError')
const { expect } = require('chai')

describe('Solty Address', () => {
  let soltyAddress0
  let soltyAddress1
  it('should instantiate from [0, .., 0]', () => {
    soltyAddress0 = new SoltyAddress((new Uint8Array(20)).fill(0))
  })
  it('should instantiate from [1, .., 1]', () => {
    soltyAddress1 = new SoltyAddress((new Uint8Array(20)).fill(1))
  })
  it('soltyAddress0 and soltyAddress1 should not be equal', () => {
    soltyAddress0.equals(soltyAddress1).should.equal(false)
  })
  it('soltyAddress0 and soltyAddress0 should be equal', () => {
    soltyAddress0.equals(soltyAddress0).should.equal(true)
  })
  it('getRandom', () => {
    SoltyAddress.getRandom().should.be.instanceOf(SoltyAddress)
    SoltyAddress.getRandom().bytes.should.have.length(20)
  })
  it('should throw InvalidAddressLengthError', () => {
    expect(() => {
      new SoltyAddress((new Uint8Array(21)).fill(0))
    }).to.throw().an.instanceOf(InvalidBytesLengthError)
    expect(() => {
      SoltyAddress.fromHexu('')
      console.log(SoltyAddress.fromHexu(''))
    }).to.throw().an.instanceOf(InvalidBytesLengthError)
    expect(() => {
      SoltyAddress.fromHexu('00')
    }).to.throw().an.instanceOf(InvalidBytesLengthError)
    expect(() => {
      SoltyAddress.fromHexp('0x')
      console.log(SoltyAddress.fromHexu(''))
    }).to.throw().an.instanceOf(InvalidBytesLengthError)
    expect(() => {
      SoltyAddress.fromHexp('0x00')
    }).to.throw().an.instanceOf(InvalidBytesLengthError)

  })

})
