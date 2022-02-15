import { EventType } from "./enums";

export interface Observable {
    attach(customer: Observer): void 
    detach(customer: Observer): void
    notify(eventType: EventType, info: string): void
}

export interface Observer {
    showUpdate(info: string): void
}