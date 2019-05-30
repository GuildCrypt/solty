import { getRandomUint8Array } from '../utils/getRandomUint8Array'
import { convertHexuToHexp } from '../utils/convertHexuToHexp'
import { convertUint8ArrayToHexu } from '../utils/convertUint8ArrayToHexu'
import { convertHexpToHexu } from '../utils/convertHexpToHexu'
import { convertHexuToUint8Array } from '../utils/convertHexuToUint8Array'

export class Solty {

  array: Array<number> | undefined
  hexu: string | undefined
  hexp: string | undefined
  number: number

  static fromHexu(hexu: string): Solty {
    return new this(convertHexuToUint8Array(hexu))
  }

  static fromHexp(hexp: string): Solty {
    return this.fromHexu(convertHexpToHexu(hexp))
  }

  constructor(public bytes : Uint8Array) {}

  getArray() {
    if (this.array !== undefined) {
      return this.array
    }
    this.array = Array.from(this.bytes)
    return this.array
  }

  getHexu(): string {
    if (this.hexu) {
      return this.hexu
    }
    this.hexu = convertUint8ArrayToHexu(this.bytes)
    return this.hexu
  }

  getHexp(): string {
    if (this.hexp){
      return this.hexp
    }
    this.hexp = convertHexuToHexp(this.getHexu())
    return this.hexp
  }

  equals(solty: Solty): boolean {
    if (this.bytes.length !== solty.bytes.length) {
      return false
    }
    for (let i = 0; i < this.bytes.length; i++) {
      if (this.bytes[i] !== solty.bytes[i]) {
        return false
      }
    }
    return true
  }

}
