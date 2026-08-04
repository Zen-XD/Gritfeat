export class DLNode<T> {
    constructor(
        public value: T,
        public next: DLNode<T> | null = null,
        public prev: DLNode<T> | null = null,
    ) {}
}

export class DoublyLinkedList<T> {
    public head: DLNode<T> | null = null;
    public tail: DLNode<T> | null = null;
    public size: number = 0;

    append(value: T): void {
        const newNode = new DLNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value: T): void {
        const newNode = new DLNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    deleteHead(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head!.prev = null;
        }
        this.size--;
        return value;
    }

    deleteTail(): T | undefined {
        if (!this.tail) return undefined;
        const value = this.tail.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail!.next = null;
        }
        this.size--;
        return value;
    }

    reverse(): void {
        let current = this.head;
        this.tail = this.head;
        while (current) {
            const nextNode = current.next;
            current.next = current.prev;
            current.prev = nextNode;
            this.head = current; // Keep updating head so it ends at the original tail
            current = nextNode;
        }
    }
}
