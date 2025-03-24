"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackService = void 0;
// use generic so we can create stack of any object
// for future -> potentially add method to peek stack?
class StackService {
    constructor() {
        this.items = [];
    }
    // gets size of stack
    size() {
        return this.items.length;
    }
    // adds to stack
    push(item) {
        (item);
        if (item != null) {
            this.items.push(item);
        }
    }
    // removes from stack
    pop() {
        if (this.size() == 0) {
            return undefined;
        }
        else {
            return this.items.pop();
        }
    }
}
exports.StackService = StackService;
