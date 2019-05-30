import { CustomError } from '../classes/CustomError'

export class HexpUnprefixedError extends CustomError {
  constructor() {
    super('hexp not prefixed, should start with "0x"')
  }
}

export function convertHexpToHexu(hexp: string): string {
  if (hexp.indexOf('0x') !== 0) {
    throw new HexpUnprefixedError
  }
  return hexp.substr(2)
}
