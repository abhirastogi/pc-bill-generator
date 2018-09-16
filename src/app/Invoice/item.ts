export class Item{
    description:string;
    quantity:number;
    cost:number;

    // get Description():string{
    //     return this._description;
    // }
    // set Description(value:string){
    //     this._description = value;
    // }
    // get Quantity(): number{
    //     return this._quantity;
    // }
    // set Quantity(value: number){
    //     this._quantity = value;
    // }
    // get Cost(): number{
    //     return this._cost;
    // }
    // set Cost(value: number){
    //     this._cost = value;
    // }
    get total(): number{
        return this.quantity * this.cost;
    }
}