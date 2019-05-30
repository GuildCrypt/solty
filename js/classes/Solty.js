"use strict";
exports.__esModule = true;
var convertHexuToHexp_1 = require("../utils/convertHexuToHexp");
var convertUint8ArrayToHexu_1 = require("../utils/convertUint8ArrayToHexu");
var convertHexpToHexu_1 = require("../utils/convertHexpToHexu");
var convertHexuToUint8Array_1 = require("../utils/convertHexuToUint8Array");
var Solty = /** @class */ (function () {
    function Solty(bytes) {
        this.bytes = bytes;
    }
    Solty.fromHexu = function (hexu) {
        return new this(convertHexuToUint8Array_1.convertHexuToUint8Array(hexu));
    };
    Solty.fromHexp = function (hexp) {
        return this.fromHexu(convertHexpToHexu_1.convertHexpToHexu(hexp));
    };
    Solty.prototype.getArray = function () {
        if (this.array !== undefined) {
            return this.array;
        }
        this.array = Array.from(this.bytes);
        return this.array;
    };
    Solty.prototype.getHexu = function () {
        if (this.hexu) {
            return this.hexu;
        }
        this.hexu = convertUint8ArrayToHexu_1.convertUint8ArrayToHexu(this.bytes);
        return this.hexu;
    };
    Solty.prototype.getHexp = function () {
        if (this.hexp) {
            return this.hexp;
        }
        this.hexp = convertHexuToHexp_1.convertHexuToHexp(this.getHexu());
        return this.hexp;
    };
    Solty.prototype.equals = function (solty) {
        if (this.bytes.length !== solty.bytes.length) {
            return false;
        }
        for (var i = 0; i < this.bytes.length; i++) {
            if (this.bytes[i] !== solty.bytes[i]) {
                return false;
            }
        }
        return true;
    };
    return Solty;
}());
exports.Solty = Solty;
