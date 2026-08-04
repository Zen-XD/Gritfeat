export class ListNode<T> {
    constructor(
        public value: T,
        public next: ListNode<T> | null = null,
    ) {}
}

export class SinglyLinkedList<T> {
    public head: ListNode<T> | null = null;
    public size: number = 0;

    append(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(value: T): void {
        const newNode = new ListNode(value, this.head);
        this.head = newNode;
        this.size++;
    }

    insertAt(index: number, value: T): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const newNode = new ListNode(value);
        let current = this.head!;
        for (let i = 0; i < index - 1; i++) {
            current = current.next!;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    deleteHead(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    deleteAt(index: number): T | undefined {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            return this.deleteHead();
        }
        let current = this.head!;
        for (let i = 0; i < index - 1; i++) {
            current = current.next!;
        }
        const value = current.next!.value;
        current.next = current.next!.next;
        this.size--;
        return value;
    }

    search(value: T): number {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}
