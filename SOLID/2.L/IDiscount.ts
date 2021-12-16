

export interface IDiscount{
//This is called a Union, the discountType can only contain the following 2 values:
// type discountType = "variable" | "fixed" | "none";
    apply(price : number): number;
    showCalculation(price : number): string;

}