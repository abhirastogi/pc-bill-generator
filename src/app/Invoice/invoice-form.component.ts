import { Component, Input, Output } from "@angular/core";
import { Customer } from "./customer";
import { Company } from "./company";
import { Item } from "./item";

@Component({
    selector : 'pc-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice-form.component.css']
})
export class InvoiceComponent{
    Invoice :string = "Invoice";
    _invoice_number:string = '0';
    logoUrl:string = '../assets/PC_logo.png';
    logoWidth:number = 300 
    customer:Customer = new Customer();
    company:Company = new Company();
    currencySymbol:string = "₹"; 
    items:Item[];
    gst = 13;
    printMode : boolean = false;
    constructor(){
        this.items = [];
    }
    get invoice_number(): string{
        return this._invoice_number;
    }
    set invoice_number(value:string){
        this._invoice_number = value;
    }
    invoiceSubTotal(): number{
        var total:number = 0
        for(let item of this.items)
        {
            total += item.total;
        }
        return total;
    }
    calculateTax(): number{
        return this.invoiceSubTotal() * (this.gst /100);
    }
    calculateGrandTotal(): number{
        return this.invoiceSubTotal() + this.calculateTax();
    }
    addItem():void{
        this.items.push({
            description : "",
            quantity : 0,
            cost : 0,
            get total() {
                return this.quantity * this.cost;
            }
        })
    }
    removeItem(item:Item): void{
        this.items.splice(this.items.indexOf(item), 1);
    }
    printInfo(): void{
        window.print();
    }
    setPrint():void{
        this.printMode = true;
    }
    unsetPrint():void{
        this.printMode = false;
    }
    clearLocalStorage():void{

    }

}