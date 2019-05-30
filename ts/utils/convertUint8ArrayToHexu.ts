export function convertUint8ArrayToHexu(uint8Array: Uint8Array): string {
  return Array.from(uint8Array).map((byte) => {
    if (byte === 0) {
      return '00'
    } else if (byte < 16) {
      return '0' + byte.toString(16)
    } else {
      return byte.toString(16)
    }
  }).join('')
}
