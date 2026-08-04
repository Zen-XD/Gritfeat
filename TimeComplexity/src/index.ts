// Find if a duplicate exists in a list of numbers
const findDuplicates = (arr: number[]): void => {
    const arrNum = new Set<number>();
    const duplicate = new Set<number>();

    for (const num of arr) {
        if (arrNum.has(num)) {
            duplicate.add(num);
        } else {
            arrNum.add(num);
        }
    }

    console.log([...duplicate]);
};

findDuplicates([1, 3, 5, 2, 4, 5]);

// Time Complexity: O(n)

// Check if any item from user roles exists in required roles.
const roles = ["admin", "manager", "supervisor", "editor", "viewer", "owner"];

const roleExists = (userRoles: string[], requiredRoles: string[]): void => {
    const reqSet = new Set(requiredRoles);

    for (const role of userRoles) {
        if (reqSet.has(role)) {
            console.log(true);
            return;
        }
    }

    console.log(false);
};

roleExists(["user", "editor"], ["admin", "editor"]);

// Time Complexity: O(n + m) ; building a set takes O(m) and checking each user role takes O(n)

// Find Common Elements Between Two Arrays
const commonElements = (arr1: number[], arr2: number[]): void => {
    const set = new Set(arr2);

    const common = arr1.filter((num) => set.has(num));

    console.log(common);
};

const a1 = [1, 4, 2, 8, 9];
const a2 = [7, 5, 0, 4, 1];

commonElements(a1, a2);

// Time Complexity: O(n + m) ; building a set takes O(m) and filtering the first array takes O(n)

// Filter items based on allowed keys
const filterItems = (
    data: { key: string; value: any }[],
    allowedKeys: string[],
): void => {
    const allowed = new Set(allowedKeys);

    const result = data.filter((item) => allowed.has(item.key));

    console.log(result);
};

const data = [
    { key: "name", value: "John" },
    { key: "email", value: "john@example.com" },
    { key: "age", value: 20 },
];
const allowedKeys = ["name", "age"];

filterItems(data, allowedKeys);

// Time Complexity: O(n + m) ; building a set takes O(m) and filtering the data takes O(n)

// Determine whether both keys and values  of two objects are equal
const equalObject = (
    obj1: Record<string, any>,
    obj2: Record<string, any>,
): void => {
    const keys1 = Object.keys(obj1);

    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            console.log(false);
            return;
        }
    }

    console.log(true);
};

const d1 = { name: "John", email: "john@example.com", age: 20 };
const d2 = { name: "John", email: "john@example.com", age: 20 };
const d3 = { name: "Jane", email: "jane@example.com", age: 20 };

equalObject(d1, d2);
equalObject(d1, d3);

// Time Complexity: O(n)

// Group the related data by category
const groupByCategory = (
    products: {
        id: number;
        name: string;
        categoryId: number;
    }[],
): void => {
    const grouped: Record<number, any[]> = {};

    for (const product of products) {
        if (!grouped[product.categoryId]) {
            grouped[product.categoryId] = [];
        }

        grouped[product.categoryId]!.push(product);
    }

    console.log(grouped);
};

const products = [
    { id: 1, name: "Phone", categoryId: 2 },
    { id: 2, name: "Shirt", categoryId: 1 },
    { id: 3, name: "Charger", categoryId: 2 },
];

groupByCategory(products);

// Time Complexity: O(n)

// Implement binary search algorithm. (If sorting is required, you should use one of the sorting algorithms: Selection, Insertion, Merge, Quick, Heap Sort)
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[0] as number;
    const rest = arr.slice(1);

    const left = rest.filter((x) => x < pivot);
    const right = rest.filter((x) => x >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const current = arr[mid] as number;

        if (current === target) return mid;
        if (current < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

const sortData = [89, 12, 45, 2, 73, 56, 33];
const target = 45;

const sortedData = quickSort(sortData);
const index = binarySearch(sortedData, target);

console.log("Sorted Array:", sortedData);
console.log("Index:", index);

// Function to detect whether the dependency structure contains any cycles, where an item indirectly or directly depends on itself.(optional)
type Dependency = { id: number };

type NodeData = {
    id: number;
    dependsOn: Dependency[];
};

type Graph = Record<string, NodeData>;

function detectDependencyCycle(deps: Graph): {
    cycle: boolean;
    cyclePath: string[];
} {
    const idToKey = new Map<number, string>();

    for (const [key, value] of Object.entries(deps)) {
        idToKey.set(value.id, key);
    }

    const visited = new Set<string>();
    const visiting = new Set<string>();

    function dfs(nodeKey: string, currentPath: string[]): string[] {
        if (visiting.has(nodeKey)) {
            const cycleStartIndex = currentPath.indexOf(nodeKey);
            return [...currentPath.slice(cycleStartIndex), nodeKey];
        }

        if (visited.has(nodeKey)) {
            return [];
        }

        visiting.add(nodeKey);
        currentPath.push(nodeKey);

        const node = deps[nodeKey];

        if (node && Array.isArray(node.dependsOn)) {
            for (const dep of node.dependsOn) {
                const targetKey = idToKey.get(dep.id);

                if (targetKey) {
                    const cycle = dfs(targetKey, currentPath);
                    if (cycle.length > 0) {
                        return cycle;
                    }
                }
            }
        }

        visiting.delete(nodeKey);
        visited.add(nodeKey);
        currentPath.pop();

        return [];
    }

    for (const startNode of Object.keys(deps)) {
        if (!visited.has(startNode)) {
            const cyclePath = dfs(startNode, []);
            if (cyclePath.length > 0) {
                return { cycle: true, cyclePath };
            }
        }
    }

    return { cycle: false, cyclePath: [] };
}

const deps: Graph = {
    A: { id: 1, dependsOn: [{ id: 2 }] },
    B: { id: 2, dependsOn: [{ id: 3 }] },
    C: { id: 3, dependsOn: [{ id: 1 }] },
};

const result = detectDependencyCycle(deps);

console.log(`Answer: ${result.cycle}`);
if (result.cycle) {
    console.log(`Answer:`, result.cyclePath);
}

// Explain the concept of a Binary Search Tree and provide its implementation in Typescript.
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: TreeNode | null = null;

    insert = (value: number): void => {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }

                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }

                current = current.right;
            }
        }
    };

    search = (value: number): void => {
        let current = this.root;

        while (current) {
            if (current.value === value) {
                console.log("Found");
                return;
            }

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        console.log("Not Found");
    };

    allNodes = (node: TreeNode | null = this.root): void => {
        if (!node) return;

        this.allNodes(node.left);
        console.log(node.value);
        this.allNodes(node.right);
    };
}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

bst.search(6);
bst.search(1);

bst.allNodes();
