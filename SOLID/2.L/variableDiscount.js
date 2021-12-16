"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDiscount = void 0;
var VariableDiscount = /** @class */ (function () {
    function VariableDiscount() {
    }
    VariableDiscount.prototype.constuctor = function (value) {
        this._value = value;
    };
    VariableDiscount.prototype.apply = function (price) {
        return (price - (price * this._value / 100));
    };
    VariableDiscount.prototype.showCalculation = function (price) {
        return price + " € -  " + this._value + "%";
    };
    return VariableDiscount;
}());
exports.VariableDiscount = VariableDiscount;
