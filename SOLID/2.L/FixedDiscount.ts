 import { IDiscount } from './IDiscount';

export class FixedDiscount implements IDiscount {

     private _value: number;

    constuctor(value : number){
        this._value = value;
    }

    apply(price : number) : number{
        return Math.max(0, price - this._value);
    }

    showCalculation(price : number) : string {
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }


}