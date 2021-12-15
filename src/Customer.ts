import { Observer } from "./interface";

export class CorporateCustomer implements Observer {
    update(info: string): void {
        console.log("New Corporate Price: " + info)
    }
}

export class RegularCustomer implements Observer {
    update(info: string): void {
        console.log("New Regular Price: " + info)
    }
}