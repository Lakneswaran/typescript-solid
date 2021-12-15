import { Interface } from './Ineterface';


export class VariableDiscount implements Discounts{


  


        private _value: number;

        constuctor(value : number){
            this._value = value;
        }
    
        aplly(price : number) : number{
            return (price - (price * this._value / 100));
        }
    
        showCalculation(price : number) : string {
            return price + " € -  "+ this._value +"%";
        }


}