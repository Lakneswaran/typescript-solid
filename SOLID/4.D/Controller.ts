
import { Gas } from "./Gas";
import { Oven } from "./Oven";
    
    
class Restaurant {
    private _name : string;
    private _gas : Gas;

    constructor(name : string, gas :Gas) {
        this._name = name;
        this._gas = gas;
    }

    public Cook(item : string) {
        this._gas.lightGas();
        this._gas.bake(item);
        this._gas.extinguishGas();
    }
}


let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
