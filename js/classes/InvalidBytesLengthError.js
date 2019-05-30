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
var InvalidBytesLengthError = /** @class */ (function (_super) {
    __extends(InvalidBytesLengthError, _super);
    function InvalidBytesLengthError(fullname, bytesLength, receivedBytesLength) {
        var _this = _super.call(this, fullname + " should have bytes length of " + bytesLength + ", received " + receivedBytesLength) || this;
        _this.fullname = fullname;
        _this.bytesLength = bytesLength;
        _this.receivedBytesLength = receivedBytesLength;
        return _this;
    }
    return InvalidBytesLengthError;
}(CustomError_1.CustomError));
exports.InvalidBytesLengthError = InvalidBytesLengthError;
