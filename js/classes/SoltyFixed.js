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
var Solty_1 = require("./Solty");
var convertHexpToHexu_1 = require("../utils/convertHexpToHexu");
var convertHexuToUint8Array_1 = require("../utils/convertHexuToUint8Array");
var SoltyFixed = /** @class */ (function (_super) {
    __extends(SoltyFixed, _super);
    function SoltyFixed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoltyFixed.fromHexu = function (hexu) {
        return new this(convertHexuToUint8Array_1.convertHexuToUint8Array(hexu));
    };
    SoltyFixed.fromHexp = function (hexp) {
        return this.fromHexu(convertHexpToHexu_1.convertHexpToHexu(hexp));
    };
    return SoltyFixed;
}(Solty_1.Solty));
exports.SoltyFixed = SoltyFixed;
