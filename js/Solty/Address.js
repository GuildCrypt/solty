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
var Solty_1 = require("../classes/Solty");
var InvalidBytesLengthError_1 = require("../classes/InvalidBytesLengthError");
var convertHexpToHexu_1 = require("../utils/convertHexpToHexu");
var convertHexuToUint8Array_1 = require("../utils/convertHexuToUint8Array");
var getRandomUint8Array_1 = require("../utils/getRandomUint8Array");
var SoltyAddress = /** @class */ (function (_super) {
    __extends(SoltyAddress, _super);
    function SoltyAddress(bytes) {
        var _this = _super.call(this, bytes) || this;
        _this.bytesLength = 20;
        if (bytes.length !== _this.bytesLength) {
            throw new InvalidBytesLengthError_1.InvalidBytesLengthError('Address', _this.bytesLength, bytes.length);
        }
        return _this;
    }
    SoltyAddress.getRandom = function (hexu) {
        return new this(getRandomUint8Array_1.getRandomUint8Array(this.bytesLength));
    };
    SoltyAddress.fromHexu = function (hexu) {
        return new this(convertHexuToUint8Array_1.convertHexuToUint8Array(hexu));
    };
    SoltyAddress.fromHexp = function (hexp) {
        return this.fromHexu(convertHexpToHexu_1.convertHexpToHexu(hexp));
    };
    SoltyAddress.bytesLength = 20;
    return SoltyAddress;
}(Solty_1.Solty));
exports.SoltyAddress = SoltyAddress;
