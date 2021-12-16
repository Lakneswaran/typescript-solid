import { IDiscount } from './IDiscount';

export class VariableDiscount implements IDiscount {

    public _value: number;

    constructor(value : number){
        this._value = value;
    }
    
        apply(price : number) : number{
            return (price - (price * this._value / 100));
        }
    
        showCalculation(price : number) : string {
            return price + " € -  "+ this._value +"%";
        }


}

