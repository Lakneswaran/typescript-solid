"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
//admin cannot use google or facebook token
var Admin = /** @class */ (function () {
    function Admin() {
        this._password = 'admin';
    }
    Admin.prototype.checkGoogleLogin = function (token) {
        return false;
    };
    Admin.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    Admin.prototype.getFacebookLogin = function (token) {
        return false;
    };
    Admin.prototype.setFacebookToken = function () {
        throw new Error('Function not supported for admins');
    };
    Admin.prototype.setGoogleToken = function () {
        throw new Error('Function not supported for admins');
    };
    Admin.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    return Admin;
}());
exports.Admin = Admin;
