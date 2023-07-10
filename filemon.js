import fs from 'fs';
import EventEmitter from 'events';

export class FileMon {
   // #listeners = [] 
    constructor(path) {
        this.events = new EventEmitter(); 
        fs.watchFile(path, (c) => {
            this.events.emit('change', c);
            // for (let l of this.#listeners) {
            //     if (l["onChange"]) l.onChange(c)
            // }
        });
    }
    // addListener(l) {
    //     this.#listeners.push(l); 
    // }
}