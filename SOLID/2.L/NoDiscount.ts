import { Interface } from './Ineterface';


export class NoDiscount implements Discounts {

    private _value: number;

    constuctor(value : number){
        this._value = value;
    }

    aplly(price : number) : number{
        return price;
    }

    showCalculation(price : number) : string {
        return "No discount";
    }
    
}