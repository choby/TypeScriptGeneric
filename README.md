# TypeScriptGeneric
## 收集/编写实用的ts泛型

- OptionalKeys : 用于获取类型中可选属性, 返回所有可选属性字面量联合类型:
  ```
    interface T1 {
        a: string;
        b?: string;
        c: string;
        d?: string;
    }
    
    type T2 = OptionalKeys<T1>;
    // T2: "b" | "d" 
  ```
