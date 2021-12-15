import { CorporateCustomer, RegularCustomer } from "./Customer";
import { EventType } from "./enums";
import { Observable, Observer } from "./interface";

export class Warehouse implements Observable {
    private _regularCustomers: RegularCustomer[];
    private _corporateCustomers: CorporateCustomer[];
    private _corporatePrice: number;
    private _regularPrice: number;
    constructor(corporatePrice: number = 0, regularPrice: number = 0) {
        this._corporateCustomers = [];
        this._regularCustomers = [];
        this._regularPrice = regularPrice;
        this._corporatePrice = corporatePrice;
    }

    updateCorporatePrice(newPrice: number) {
        this._corporatePrice = newPrice
        this.notify(EventType.Corporate, `$ ${newPrice}`)
    }

    updateRegularPrice(newPrice: number) {
        this._regularPrice = newPrice
        this.notify(EventType.Regular, `$ ${newPrice}`)
    }

    private _isRegularCustomer(customer: Observer) {
        return customer instanceof RegularCustomer;
    }

    private _isCorporateCustomer(customer: Observer) {
        return customer instanceof CorporateCustomer
    }

    attach(customer: Observer): void {
        if(this._isRegularCustomer(customer)) 
        this._regularCustomers.push(customer);

        if(this._isCorporateCustomer(customer))
        this._corporateCustomers.push(customer);

        console.log("New Regular Customer Count: " + this._regularCustomers.length)
        console.log("New Corporate Customer Count: " + this._corporateCustomers.length)
        return;
    }

    detatch(customer: Observer): void {
        const index = this._isRegularCustomer(customer) ? this._regularCustomers.indexOf(customer) 
        : 
        this._isCorporateCustomer(customer) ? this._corporateCustomers.indexOf(customer) 
        : 
        -1

        if(index > -1) {
            this._isRegularCustomer(customer) ? this._regularCustomers.splice(index, 1)
            : 
            this._isCorporateCustomer(customer) ? this._corporateCustomers.splice(index, 1)
            : 
            null
        } else {
            throw new Error("No Such Customer Exists")
        }

        console.log("New Regular Customer Count: " + this._regularCustomers.length)
        console.log("New Corporate Customer Count: " + this._corporateCustomers.length)
        return;
    }

    notify(eventType: EventType, info: string): void {
        switch(eventType) {
            case EventType.Regular: 
                this._regularCustomers.forEach(el => {
                    el.update(info);
                })
                break;

            case EventType.Corporate:
                this._corporateCustomers.forEach(el => {
                    el.update(info)
                })
                break;
            default:
                console.log("New Regular Price: " + this._regularPrice)
                console.log("New Corporate Price: " + this._corporatePrice)
        }
    }
}