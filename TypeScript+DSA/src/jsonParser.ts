export type Result<T, E = Error> =
    | { success: true; data: T }
    | { success: false; error: E };

export function parseJSON<T>(jsonString: string): Result<T, Error> {
    try {
        const parsed = JSON.parse(jsonString) as unknown;
        return { success: true, data: parsed as T };
    } catch (err) {
        if (err instanceof Error) {
            return { success: false, error: err };
        }
        return { success: false, error: new Error(String(err)) };
    }
}
