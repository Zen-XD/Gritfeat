export function isString(val: unknown): val is string {
    return typeof val === "string";
}

export function isNumber(val: unknown): val is number {
    return typeof val === "number";
}

export function isObject(val: unknown): val is Record<PropertyKey, unknown> {
    return typeof val === "object" && val !== null && !Array.isArray(val);
}

export function isArrayOf<T>(
    val: unknown,
    guard: (item: unknown) => item is T,
): val is T[] {
    return Array.isArray(val) && val.every(guard);
}

export function assertIsString(val: unknown): asserts val is string {
    if (typeof val !== "string") {
        throw new TypeError("Value must be a string");
    }
}

export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
        throw new ReferenceError("Value cannot be null or undefined");
    }
}
