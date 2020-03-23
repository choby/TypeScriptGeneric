import { OptionalKeys } from "./OptionalKeys";

export type RequiredKeys<T> = Exclude<keyof T,OptionalKeys<T>>;


// interface T1 {
//     a: string;
//     b?: string;
//     c: string;
//     d?: string;
// }
// //test:
// type T4 = RequiredKeys<T1>;
// T4: "a" | "c" 
