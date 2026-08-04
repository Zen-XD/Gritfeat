export class CDLNode<T> {
    constructor(
        public value: T,
        public next: CDLNode<T> | null = null,
        public prev: CDLNode<T> | null = null,
    ) {}
}

export class CircularDoublyLinkedList<T> {
    public head: CDLNode<T> | null = null;
    public tail: CDLNode<T> | null = null;
    public size: number = 0;

    append(value: T): void {
        const newNode = new CDLNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail!.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    printForward(): void {
        if (!this.head) {
            console.log("Empty");
            return;
        }
        const values: T[] = [];
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            values.push(current.value);
            current = current.next!;
        }
        console.log(values.join(" -> "));
    }

    printBackward(): void {
        if (!this.tail) {
            console.log("Empty");
            return;
        }
        const values: T[] = [];
        let current = this.tail;
        for (let i = 0; i < this.size; i++) {
            values.push(current.value);
            current = current.prev!;
        }
        console.log(values.join(" <- "));
    }
}
