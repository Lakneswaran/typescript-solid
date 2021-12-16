"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Google = void 0;
var Google = /** @class */ (function () {
    function Google(googleToken) {
        this._googleToken = googleToken;
    }
    Google.prototype.checkGoogleLogin = function (token) {
        // return "this will not work";
        return (token === this._googleToken);
    };
    Google.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    return Google;
}());
exports.Google = Google;
