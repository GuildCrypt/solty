export function getRandomUint8Array(length: number): Uint8Array {
  const uint8Array = new Uint8Array(length)
  for (let i = 0; i < length; i ++) {
    const byte = Math.floor(Math.random() * 256)
    uint8Array[i] = byte
  }
  return uint8Array
}
