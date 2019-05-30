import { Solty } from '../../classes/Solty'
import { InvalidBytesLengthError } from '../../classes/InvalidBytesLengthError'
import { convertHexpToHexu } from '../../utils/convertHexpToHexu'
import { convertHexuToUint8Array } from '../../utils/convertHexuToUint8Array'
import { getRandomUint8Array } from '../../utils/getRandomUint8Array'


export class SoltyBytes30 extends Solty {
  readonly bytesLength = 30
  static bytesLength = 30

  constructor(bytes: Uint8Array) {
    super(bytes)
    if (bytes.length !== this.bytesLength) {
      throw new InvalidBytesLengthError('Bytes30', this.bytesLength, bytes.length)
    }
  }

  static getRandom(hexu: string): SoltyBytes30 {
    return new this(getRandomUint8Array(this.bytesLength))
  }
  static fromHexu(hexu: string): SoltyBytes30 {
    return new this(convertHexuToUint8Array(hexu))
  }
  static fromHexp(hexp: string): SoltyBytes30 {
    return this.fromHexu(convertHexpToHexu(hexp))
  }
  
  
}
