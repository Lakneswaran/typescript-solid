import { IDiscount } from './IDiscount';


export class NoDiscount implements IDiscount {

    private _value: number;

    constuctor(value : number){
        this._value = value;
    }

    apply(price : number) : number{
        return price;
    }

    showCalculation(price : number) : string {
        return "No discount";
    }
    
}