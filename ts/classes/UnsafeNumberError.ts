import { CustomError } from '../classes/CustomError'

export class UnsafeNumberError extends CustomError {
  constructor(public length: number) {
    super(`Cannot safely convert uint8Array of length >= 31 to number, uint8Array has length of ${length}`)
  }
}
