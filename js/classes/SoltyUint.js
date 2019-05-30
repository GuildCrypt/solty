// import { Solty } from './Solty'
// import { CustomError } from './CustomError'
// import { getRandomUint8Array } from '../utils/getRandomUint8Array'
// import { convertHexpToHexu } from '../utils/convertHexpToHexu'
// import { convertHexuToUint8Array } from '../utils/convertHexuToUint8Array'
//
//
// export class InvalidbitSizeError extends CustomError {
//   constructor(public bitSize: number) {
//     super(`bitSize be in { 8, 16, ..., 256 }, received bitSize of ${bitSize}`)
//   }
// }
//
// export class Uint8ArrayTooLongError extends CustomError {
//   constructor(public bitSize: number, public uint8ArrayLength: number) {
//     super(`bitSize of ${bitSize} can support uint8Array max length of ${bitSize * 8}, received ${uint8ArrayLength}`)
//   }
// }
//
//
// export class UnsafeNumberError extends CustomError {
//   constructor(public length: number) {
//     super(`Cannot safely convert uint8Array of length >= 31 to number, uint8Array has length of ${length}`)
//   }
// }
//
//
// export class SoltyUint extends Solty {
//
//   number: number | undefined
//   bitSize: number
//
//   constructor(uint8Array: Uint8Array) {
//     super()
//     const uint8ArrayLength = this.bitSize / 8
//     if (uint8Array.length > uint8ArrayLength) {
//       throw new Uint8ArrayTooLongError(bitSize, uint8ArrayLength)
//     }
//     const uint8ArrayPadded = new Uint8Array(uint8ArrayLength)
//     uint8ArrayPadded.fill(0)
//     uint8ArrayPadded.set(uint8Array, uint8ArrayLength - uint8Array.length)
//     this.uint8Array = uint8ArrayPadded
//   }
//
//   static getRandom(): SoltyUint {
//     return new this(getRandomUint8Array(this.bitSize / 8))
//   }
//
//   static fromHexu(hexu: string): SoltyUint {
//     return new this(convertHexuToUint8Array(hexu))
//   }
//
//   static fromHexp(hexp: string): SoltyUint {
//     return this.fromHexu(convertHexpToHexu(hexp))
//   }
//
//   getNumber(): number {
//     if (this.number) {
//       return this.number
//     }
//     if (this.uint8Array.length >= 31) {
//       throw new UnsafeNumberError(this.uint8Array.length)
//     }
//     this.number = parseInt(this.getHexu(), 16)
//     return this.number
//   }
//
//   getBignumber(Bignumber) {
//     return new Bignumber(this.getHexp())
//   }
//
//   getBn(Bn) {
//     return new Bn(this.getHexu(), 16)
//   }
//
// }
