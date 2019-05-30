import { Solty } from '../../classes/Solty'
import { InvalidBytesLengthError } from '../../classes/InvalidBytesLengthError'
import { convertHexpToHexu } from '../../utils/convertHexpToHexu'
import { convertHexuToUint8Array } from '../../utils/convertHexuToUint8Array'
import { getRandomUint8Array } from '../../utils/getRandomUint8Array'


export class SoltyBytes19 extends Solty {
  readonly bytesLength = 19
  static bytesLength = 19

  constructor(bytes: Uint8Array) {
    super(bytes)
    if (bytes.length !== this.bytesLength) {
      throw new InvalidBytesLengthError('Bytes19', this.bytesLength, bytes.length)
    }
  }

  static getRandom(hexu: string): SoltyBytes19 {
    return new this(getRandomUint8Array(this.bytesLength))
  }
  static fromHexu(hexu: string): SoltyBytes19 {
    return new this(convertHexuToUint8Array(hexu))
  }
  static fromHexp(hexp: string): SoltyBytes19 {
    return this.fromHexu(convertHexpToHexu(hexp))
  }
  
  
}
