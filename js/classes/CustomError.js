"use strict";
exports.__esModule = true;
var CustomError = /** @class */ (function () {
    function CustomError(message) {
        this.message = message;
        Error.call(this, message);
    }
    return CustomError;
}());
exports.CustomError = CustomError;
CustomError.prototype = new Error();
