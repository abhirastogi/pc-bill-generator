export class Customer{
    _name: string;
    _phoneNumber: number;
    _address1: string;
    _address2: string;
    constructor(){
        this.Name = "";
        this.PhoneNumber = 0;
        this.Address1 = "";
        this.Address2 = "";
    }   
    get Name(): string{
        return this._name;
    }
    set Name(value: string){
        this._name = value;
    }
    get PhoneNumber(): number{
        return this._phoneNumber;
    }
    set PhoneNumber(value: number){
        this._phoneNumber = value;
    }
    get Address1(): string{
        return this._address1;
    }
    set Address1(value: string){
        this._address1 = value;
    }
    get Address2(): string{
        return this._address2;
    }
    set Address2(value: string){
        this._address2= value;
    }

}