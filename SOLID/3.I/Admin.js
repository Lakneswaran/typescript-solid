"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
//admin cannot use google or facebook token
var Admin = /** @class */ (function () {
    function Admin(password) {
        this._password = 'admin';
        this._password = password;
    }
    Admin.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    Admin.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    return Admin;
}());
exports.Admin = Admin;
