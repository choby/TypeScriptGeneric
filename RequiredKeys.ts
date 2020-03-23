import { OptionalKeys } from "./OptionalKeys";

export type RequiredKeys<T> = Exclude<keyof T,OptionalKeys<T>>;
