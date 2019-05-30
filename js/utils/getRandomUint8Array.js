"use strict";
exports.__esModule = true;
function getRandomUint8Array(length) {
    var uint8Array = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
        var byte = Math.floor(Math.random() * 256);
        uint8Array[i] = byte;
    }
    return uint8Array;
}
exports.getRandomUint8Array = getRandomUint8Array;
