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
var HexpUnprefixedError = /** @class */ (function (_super) {
    __extends(HexpUnprefixedError, _super);
    function HexpUnprefixedError() {
        return _super.call(this, 'hexp not prefixed, should start with "0x"') || this;
    }
    return HexpUnprefixedError;
}(CustomError_1.CustomError));
exports.HexpUnprefixedError = HexpUnprefixedError;
function convertHexpToHexu(hexp) {
    if (hexp.indexOf('0x') !== 0) {
        throw new HexpUnprefixedError;
    }
    return hexp.substr(2);
}
exports.convertHexpToHexu = convertHexpToHexu;
