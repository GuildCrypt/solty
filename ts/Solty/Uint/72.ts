import { Solty } from '../../classes/Solty'
import { InvalidBytesLengthError } from '../../classes/InvalidBytesLengthError'
import { convertHexpToHexu } from '../../utils/convertHexpToHexu'
import { convertHexuToUint8Array } from '../../utils/convertHexuToUint8Array'
import { getRandomUint8Array } from '../../utils/getRandomUint8Array'
import { UnsafeNumberError } from '../../classes/UnsafeNumberError'

export class SoltyUint72 extends Solty {
  readonly bytesLength = 9
  static bytesLength = 9

  constructor(bytes: Uint8Array) {
    super(bytes)
    if (bytes.length !== this.bytesLength) {
      throw new InvalidBytesLengthError('Uint72', this.bytesLength, bytes.length)
    }
  }

  static getRandom(hexu: string): SoltyUint72 {
    return new this(getRandomUint8Array(this.bytesLength))
  }
  static fromHexu(hexu: string): SoltyUint72 {
    return new this(convertHexuToUint8Array(hexu))
  }
  static fromHexp(hexp: string): SoltyUint72 {
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
