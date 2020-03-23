// 开启严格null检查的项目可以实用以下定义
// type OptionalKeys<T> = {
//     [K in keyof T]-?: undefined extends T[K] ? K : never;
// }[keyof T];

// //test:
// interface T1 {
//     a: string;
//     b?: string;
//     c: string;
//     d?: string;
// }
// type T2 = OptionalKeys<T1>;
// T2: "b"|"d"

// 未开启严格null检查的项目可以实用以下定义
type IsOptional<T, K extends keyof T> = { [K1 in Exclude<keyof T, K>]: T[K1] } & { K?: T[K] } extends T ? K : never;
export type OptionalKeys<T> = { [K in keyof T]-?: IsOptional<T, K> }[keyof T];

// //test:
// type T3 = OptionalKeys<T1>;
// T3: "b"|"d"



