export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

export type MyOmit<T, K extends keyof any> = MyPick<T, Exclude<keyof T, K>>;

export type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

export type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};

export type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object
        ? T[P] extends Function
            ? T[P]
            : DeepReadonly<T[P]>
        : T[P];
};

export type ExtractReturnType<T> = T extends (...args: any[]) => infer R
    ? R
    : never;

export type SnakeToCamelCase<S extends string> =
    S extends `${infer P1}_${infer P2}${infer P3}`
        ? `${P1}${Uppercase<P2>}${SnakeToCamelCase<P3>}`
        : S;
