import { CustomError } from '../classes/CustomError'

export class InvalidBytesLengthError extends CustomError {
  constructor(public fullname: string, public bytesLength: number, public receivedBytesLength: number) {
    super(`${fullname} should have bytes length of ${bytesLength}, received ${receivedBytesLength}`)
  }
}
