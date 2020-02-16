"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // this is an example of a type annotation - tells the compiler that th id prop can only be assigned values of the 'number' type
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no statements required
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
