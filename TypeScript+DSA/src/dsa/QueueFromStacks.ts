import { Stack } from "./Stack.js";

export class QueueFromStacks<T> {
    private stackIn = new Stack<T>();
    private stackOut = new Stack<T>();

    enqueue(item: T): void {
        this.stackIn.push(item);
    }

    dequeue(): T | undefined {
        if (this.stackOut.isEmpty()) {
            while (!this.stackIn.isEmpty()) {
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
        return this.stackOut.pop();
    }

    peek(): T | undefined {
        if (this.stackOut.isEmpty()) {
            while (!this.stackIn.isEmpty()) {
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
        return this.stackOut.peek();
    }

    isEmpty(): boolean {
        return this.stackIn.isEmpty() && this.stackOut.isEmpty();
    }

    size(): number {
        return this.stackIn.size() + this.stackOut.size();
    }
}
