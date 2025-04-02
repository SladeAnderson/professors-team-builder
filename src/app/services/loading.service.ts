import { Injectable, Injector, signal } from "@angular/core";
import { Observable } from "dexie";
import { BehaviorSubject } from "rxjs";


/**
* Service responsible for managing and updating a loading message.
* Provides functionality to update the message dynamically.
* @property {string} msg - The displayed msg on the loading screen.
* @function updateMsg$ - The Function to update the displayed msg.
*/
@Injectable({
    providedIn: "root",
})
export class LoadingService {
    
    msg = signal<string>("");

    constructor () {}

    public updateMsg$(newMsg: string):void {
        
        this.msg.set(newMsg);
    }
}