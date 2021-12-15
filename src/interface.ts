import { EventType } from "./enums";

export interface Observable {
    attach(customer: Observer): void 
    detatch(customer: Observer): void
    notify(eventType: EventType, info: string): void
}

export interface Observer {
    update(info: string): void
}