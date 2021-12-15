import { Interface } from './Ineterface';

export class FixedDiscount implements Discounts {

    private _value: number;

    constuctor(value : number){
        this._value = value;
    }

    aplly(price : number) : number{
        return Math.max(0, price - this._value);
    }

    showCalculation(price : number) : string {
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }


}