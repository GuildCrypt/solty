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
var Solty_1 = require("../../classes/Solty");
var InvalidBytesLengthError_1 = require("../../classes/InvalidBytesLengthError");
var convertHexpToHexu_1 = require("../../utils/convertHexpToHexu");
var convertHexuToUint8Array_1 = require("../../utils/convertHexuToUint8Array");
var getRandomUint8Array_1 = require("../../utils/getRandomUint8Array");
var UnsafeNumberError_1 = require("../../classes/UnsafeNumberError");
var SoltyUint216 = /** @class */ (function (_super) {
    __extends(SoltyUint216, _super);
    function SoltyUint216(bytes) {
        var _this = _super.call(this, bytes) || this;
        _this.bytesLength = 27;
        if (bytes.length !== _this.bytesLength) {
            throw new InvalidBytesLengthError_1.InvalidBytesLengthError('Uint216', _this.bytesLength, bytes.length);
        }
        return _this;
    }
    SoltyUint216.getRandom = function (hexu) {
        return new this(getRandomUint8Array_1.getRandomUint8Array(this.bytesLength));
    };
    SoltyUint216.fromHexu = function (hexu) {
        return new this(convertHexuToUint8Array_1.convertHexuToUint8Array(hexu));
    };
    SoltyUint216.fromHexp = function (hexp) {
        return this.fromHexu(convertHexpToHexu_1.convertHexpToHexu(hexp));
    };
    SoltyUint216.prototype.getNumber = function () {
        if (this.number) {
            return this.number;
        }
        if (this.bytes.length >= 31) {
            throw new UnsafeNumberError_1.UnsafeNumberError(this.bytes.length);
        }
        this.number = parseInt(this.getHexu(), 16);
        return this.number;
    };
    SoltyUint216.prototype.getBignumber = function (Bignumber) {
        return new Bignumber(this.getHexp());
    };
    SoltyUint216.prototype.getBn = function (Bn) {
        return new Bn(this.getHexu(), 16);
    };
    SoltyUint216.bytesLength = 27;
    return SoltyUint216;
}(Solty_1.Solty));
exports.SoltyUint216 = SoltyUint216;
