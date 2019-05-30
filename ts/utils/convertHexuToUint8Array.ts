import { CustomError } from '../classes/CustomError'

export class OddHexLengthError extends CustomError {
  constructor(public length: number) {
    super(`hexu has odd length of ${length}`)
  }
}

export function convertHexuToUint8Array(hexu): Uint8Array {
  if (hexu.length === 0) {
    return new Uint8Array(0)
  }
  if (hexu.length % 2 === 1) {
    throw new OddHexLengthError(hexu.length)
  }
  const bytes = hexu.match(/.{1,2}/g)
  const array = bytes.map((byte) => {
    return parseInt(byte, 16)
  })
  return new Uint8Array(array)
}
