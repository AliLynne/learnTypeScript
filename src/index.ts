import { TodoItem } from "./TodoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flower"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new TodoCollection("Ali", todos);
console.clear();
console.log(
  `${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete} items to do)`
);
collection.getTodoItems(true).forEach(item => item.printDetails());
