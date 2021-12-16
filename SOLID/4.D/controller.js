"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Oven_1 = require("./Oven");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, gas) {
        this._name = name;
        this._gas = gas;
    }
    Restaurant.prototype.Cook = function (item) {
        this._gas.lightGas();
        this._gas.bake(item);
        this._gas.extinguishGas();
    };
    return Restaurant;
}());
var bakery = new Restaurant("Bakery", new Oven_1.Oven());
bakery.Cook("cookies");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
