import { IDiscount } from './IDiscount';


export class VariableDiscount implements IDiscount{


  


        private _value: number;

        constuctor(value : number){
            this._value = value;
        }
    
        apply(price : number) : number{
            return (price - (price * this._value / 100));
        }
    
        showCalculation(price : number) : string {
            return price + " € -  "+ this._value +"%";
        }


}