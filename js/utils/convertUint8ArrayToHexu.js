"use strict";
exports.__esModule = true;
function convertUint8ArrayToHexu(uint8Array) {
    return Array.from(uint8Array).map(function (byte) {
        if (byte === 0) {
            return '00';
        }
        else if (byte < 16) {
            return '0' + byte.toString(16);
        }
        else {
            return byte.toString(16);
        }
    }).join('');
}
exports.convertUint8ArrayToHexu = convertUint8ArrayToHexu;
