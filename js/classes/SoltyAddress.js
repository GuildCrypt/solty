// import { Solty } from './Solty'
// import { CustomError } from './CustomError'
// import { getRandomUint8Array } from '../utils/getRandomUint8Array'
// import { convertHexpToHexu } from '../utils/convertHexpToHexu'
// import { convertHexuToUint8Array } from '../utils/convertHexuToUint8Array'
//
//
// export class InvalidAddressLengthError extends CustomError {
//   constructor(public length: number) {
//     super(`address should have length of 20, received length of ${length}`)
//   }
// }
//
// export class SoltyAddress extends Solty {
//   constructor(public uint8Array: Uint8Array) {
//     super(20, uint8Array)
//     if (uint8Array.length !== 20) {
//       throw new InvalidAddressLengthError(uint8Array.length)
//     }
//   }
//
//   static fromHexu(hexu: string): SoltyAddress {
//     return new this(convertHexuToUint8Array(hexu))
//   }
//
//   static fromHexp(hexp: string): SoltyAddress {
//     return this.fromHexu(convertHexpToHexu(hexp))
//   }
//
//   static getRandom(): SoltyAddress {
//     return new this(getRandomUint8Array(20))
//   }
// }
