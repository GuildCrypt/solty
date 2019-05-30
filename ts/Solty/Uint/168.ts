import { Solty } from '../../classes/Solty'
import { InvalidBytesLengthError } from '../../classes/InvalidBytesLengthError'
import { convertHexpToHexu } from '../../utils/convertHexpToHexu'
import { convertHexuToUint8Array } from '../../utils/convertHexuToUint8Array'
import { getRandomUint8Array } from '../../utils/getRandomUint8Array'
import { UnsafeNumberError } from '../../classes/UnsafeNumberError'

export class SoltyUint168 extends Solty {
  readonly bytesLength = 21
  static bytesLength = 21

  constructor(bytes: Uint8Array) {
    super(bytes)
    if (bytes.length !== this.bytesLength) {
      throw new InvalidBytesLengthError('Uint168', this.bytesLength, bytes.length)
    }
  }

  static getRandom(hexu: string): SoltyUint168 {
    return new this(getRandomUint8Array(this.bytesLength))
  }
  static fromHexu(hexu: string): SoltyUint168 {
    return new this(convertHexuToUint8Array(hexu))
  }
  static fromHexp(hexp: string): SoltyUint168 {
    return this.fromHexu(convertHexpToHexu(hexp))
  }
  
  
  getNumber(): number {
    if (this.number) {
      return this.number
    }
    if (this.bytes.length >= 31) {
      throw new UnsafeNumberError(this.bytes.length)
    }
    this.number = parseInt(this.getHexu(), 16)
    return this.number
  }
  getBignumber(Bignumber) {
    return new Bignumber(this.getHexp())
  }
  getBn(Bn) {
    return new Bn(this.getHexu(), 16)
  }

}
