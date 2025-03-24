// use generic so we can create stack of any object
// for future -> potentially add method to peek stack?
export class StackService<T> {
    private items: T[] = []

    // gets size of stack
    public size() {
        return this.items.length
    }

    // adds to stack
    public push(item: T) {
        item
        if (item != null) {
            this.items.push(item)
        }
    }

    // removes from stack
    public pop(): T | undefined {
        if (this.size() == 0) {
            return undefined
        } else {
            return this.items.pop()
        }
    }
}
