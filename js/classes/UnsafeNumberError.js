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
var UnsafeNumberError = /** @class */ (function (_super) {
    __extends(UnsafeNumberError, _super);
    function UnsafeNumberError(length) {
        var _this = _super.call(this, "Cannot safely convert uint8Array of length >= 31 to number, uint8Array has length of " + length) || this;
        _this.length = length;
        return _this;
    }
    return UnsafeNumberError;
}(CustomError_1.CustomError));
exports.UnsafeNumberError = UnsafeNumberError;
