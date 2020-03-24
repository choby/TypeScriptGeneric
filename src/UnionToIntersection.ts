export type UnionToIntersection<T> =
    (T extends any ? (k: T) => void : never) extends ((k: infer I) => void) ? I : never;

// // test 
// interface T1 {
//     a: string;
// }
// interface T2 {
//     b: string;
// }
// type T3 = UnionToIntersection<T1 | T2>;
// //T3: T1 & T2