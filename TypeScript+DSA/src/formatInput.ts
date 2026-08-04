export function formatInput(input: number): string;
export function formatInput(input: Date): string;
export function formatInput(input: string[]): string;
export function formatInput(input: number | Date | string[]): string {
    if (typeof input === "number") {
        return input.toFixed(2);
    }

    if (input instanceof Date) {
        return input.toISOString();
    }

    if (Array.isArray(input)) {
        return input.join(", ");
    }
    throw new Error("Invalid input type");
}
