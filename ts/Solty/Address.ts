import { Solty } from '../classes/Solty'
import { InvalidBytesLengthError } from '../classes/InvalidBytesLengthError'
import { convertHexpToHexu } from '../utils/convertHexpToHexu'
import { convertHexuToUint8Array } from '../utils/convertHexuToUint8Array'
import { getRandomUint8Array } from '../utils/getRandomUint8Array'


export class SoltyAddress extends Solty {
  readonly bytesLength = 20
  static bytesLength = 20

  constructor(bytes: Uint8Array) {
    super(bytes)
    if (bytes.length !== this.bytesLength) {
      throw new InvalidBytesLengthError('Address', this.bytesLength, bytes.length)
    }
  }

  static getRandom(hexu: string): SoltyAddress {
    return new this(getRandomUint8Array(this.bytesLength))
  }
  static fromHexu(hexu: string): SoltyAddress {
    return new this(convertHexuToUint8Array(hexu))
  }
  static fromHexp(hexp: string): SoltyAddress {
    return this.fromHexu(convertHexpToHexu(hexp))
  }
  
  
}
