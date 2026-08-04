export function processType(
    input: string | number | boolean | null | undefined | unknown,
): string {
    if (input === null || input === undefined) {
        return "Empty value";
    }
    if (typeof input === "string") {
        return `String: ${input}`;
    }
    if (typeof input === "number") {
        return `Number: ${input}`;
    }
    if (typeof input === "boolean") {
        return `Boolean: ${input}`;
    }
    return "Unknown value type";
}
