export class CustomError {
  constructor (public message: string) {
    Error.call(this, message)
  }
}

CustomError.prototype = new Error()
