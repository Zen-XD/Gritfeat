export class Stack<T> {
    #data: T[] = [];

    push(item: T): void {
        this.#data.push(item);
    }

    pop(): T | undefined {
        return this.#data.pop();
    }

    peek(): T | undefined {
        return this.#data[this.#data.length - 1];
    }

    isEmpty(): boolean {
        return this.#data.length === 0;
    }

    size(): number {
        return this.#data.length;
    }

    clear(): void {
        this.#data = [];
    }
}
