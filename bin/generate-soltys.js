const fs = require('fs-extra')

const soltysPath = `${__dirname}/../ts/Solty/`

class SoltyParam {
  constructor(
    name,
    path,
    uint8ArrayLength
  ) {
    this.name = name
    this.fullname = `Solty${this.name}`
    this.path = path
    this.fullpath = `${soltysPath}${path}.ts`
    this.uint8ArrayLength = uint8ArrayLength
    this.pathDepth = this.path.split('/').length
    this.relativePath = '../'.repeat(this.pathDepth)
  }

  getImportsTs() {
    return ''
  }


  getStaticsTs() {
    return ''
  }

  getMethodsTs() {
    return ''
  }


  getTs() {
    return `import { Solty } from '${this.relativePath}classes/Solty'
import { InvalidBytesLengthError } from '${this.relativePath}classes/InvalidBytesLengthError'
import { convertHexpToHexu } from '${this.relativePath}utils/convertHexpToHexu'
import { convertHexuToUint8Array } from '${this.relativePath}utils/convertHexuToUint8Array'
import { getRandomUint8Array } from '${this.relativePath}utils/getRandomUint8Array'
${this.getImportsTs()}

export class ${this.fullname} extends Solty {
  readonly bytesLength = ${this.uint8ArrayLength}
  static bytesLength = ${this.uint8ArrayLength}

  constructor(bytes: Uint8Array) {
    super(bytes)
    if (bytes.length !== this.bytesLength) {
      throw new InvalidBytesLengthError('${this.name}', this.bytesLength, bytes.length)
    }
  }

  static getRandom(hexu: string): ${this.fullname} {
    return new this(getRandomUint8Array(this.bytesLength))
  }
  static fromHexu(hexu: string): ${this.fullname} {
    return new this(convertHexuToUint8Array(hexu))
  }
  static fromHexp(hexp: string): ${this.fullname} {
    return this.fromHexu(convertHexpToHexu(hexp))
  }
  ${this.getStaticsTs()}
  ${this.getMethodsTs()}
}
`
  }
  write() {
    fs.outputFileSync(this.fullpath, this.getTs(), 'utf8')
  }
}

class UintSoltyParam extends SoltyParam {
  getImportsTs() {
    return `import { UnsafeNumberError } from '${this.relativePath}classes/UnsafeNumberError'`
  }
  getMethodsTs() {
return `
  getNumber(): number {
    if (this.number) {
      return this.number
    }
    if (this.bytes.length >= 31) {
      throw new UnsafeNumberError(this.bytes.length)
    }
    this.number = parseInt(this.getHexu(), 16)
    return this.number
  }
  getBignumber(Bignumber) {
    return new Bignumber(this.getHexp())
  }
  getBn(Bn) {
    return new Bn(this.getHexu(), 16)
  }
`
  }
  getStaticsTs() {
    return ``
  }
}

fs.removeSync(soltysPath)

const soltyParams = [
  new SoltyParam('Address', 'Address', 20)
]

for (i = 8; i <= 256; i += 8) {
  soltyParams.push(new UintSoltyParam(`Uint${i}`, `Uint/${i}`, i / 8))
}

for (i = 1; i <= 32; i += 1) {
  soltyParams.push(new SoltyParam(`Bytes${i}`, `Bytes/${i}`, i))
}


soltyParams.forEach((soltyParam) => {
  soltyParam.write()
})
