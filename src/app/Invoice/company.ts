export class Company{
    _name: string;
    _phoneNumber: number;
    _address1: string;
    _address2: string;
    _gstIn: string;
    constructor(){
        this.Name = "Perfect Care";
        this.PhoneNumber = 123456789;
        this.Address1 = "E-2/ Kamdhenu Tower";
        this.Address2 = "Arera Colony";
        this.GSTin = "123456789" 
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
    get GSTin(): string{
        return this._gstIn;
    }
    set GSTin(value: string){
        this._gstIn= value;
    }

}