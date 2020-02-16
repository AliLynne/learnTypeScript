"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new TodoItem_1.TodoItem(1, "Buy Flower"),
    new TodoItem_1.TodoItem(2, "Get Shoes"),
    new TodoItem_1.TodoItem(3, "Collect Tickets"),
    new TodoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Ali", todos);
console.clear();
console.log(`${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete} items to do)`);
collection.getTodoItems(true).forEach(item => item.printDetails());
