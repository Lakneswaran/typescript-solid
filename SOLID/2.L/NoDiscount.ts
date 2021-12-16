import { IDiscount } from './IDiscount';


export class NoDiscount implements IDiscount {

     public _value: number;

    constructor(value : number){
        this._value = value;
    }

    apply(price : number) : number{
        return price;
    }

    showCalculation(price : number) : string {
        return "No discount";
    }
    
}