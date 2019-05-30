"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CustomError_1 = require("../classes/CustomError");
var OddHexLengthError = /** @class */ (function (_super) {
    __extends(OddHexLengthError, _super);
    function OddHexLengthError(length) {
        var _this = _super.call(this, "hexu has odd length of " + length) || this;
        _this.length = length;
        return _this;
    }
    return OddHexLengthError;
}(CustomError_1.CustomError));
exports.OddHexLengthError = OddHexLengthError;
function convertHexuToUint8Array(hexu) {
    if (hexu.length === 0) {
        return new Uint8Array(0);
    }
    if (hexu.length % 2 === 1) {
        throw new OddHexLengthError(hexu.length);
    }
    var bytes = hexu.match(/.{1,2}/g);
    var array = bytes.map(function (byte) {
        return parseInt(byte, 16);
    });
    return new Uint8Array(array);
}
exports.convertHexuToUint8Array = convertHexuToUint8Array;
