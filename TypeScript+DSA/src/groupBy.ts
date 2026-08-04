export function groupBy<T, K extends keyof any>(
    array: T[],
    keyGetter: (item: T) => K,
): Record<K, T[]> {
    const result = {} as Record<K, T[]>;
    for (const item of array) {
        const key = keyGetter(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}
