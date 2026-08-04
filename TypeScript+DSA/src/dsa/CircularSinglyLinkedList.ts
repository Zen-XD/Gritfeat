export class CSLNode<T> {
    constructor(
        public value: T,
        public next: CSLNode<T> | null = null,
    ) {}
}

export class CircularSinglyLinkedList<T> {
    public tail: CSLNode<T> | null = null;
    public size: number = 0;

    append(value: T): void {
        const newNode = new CSLNode(value);
        if (!this.tail) {
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value: T): void {
        const newNode = new CSLNode(value);
        if (!this.tail) {
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
        }
        this.size++;
    }

    deleteValue(value: T): boolean {
        if (!this.tail) return false;
        let current = this.tail.next!;
        let prev = this.tail;

        for (let i = 0; i < this.size; i++) {
            if (current.value === value) {
                if (this.size === 1) {
                    this.tail = null;
                } else {
                    prev.next = current.next;
                    if (current === this.tail) {
                        this.tail = prev;
                    }
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next!;
        }
        return false;
    }

    print(): void {
        if (!this.tail) {
            console.log("Empty");
            return;
        }
        const values: T[] = [];
        let current = this.tail.next!;
        for (let i = 0; i < this.size; i++) {
            values.push(current.value);
            current = current.next!;
        }
        console.log(values.join(" -> "));
    }
}
