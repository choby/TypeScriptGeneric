# TypeScriptGeneric
## 实用的ts泛型

- OptionalKeys : 用于获取类型中可空属性, 返回所有可选属性字面量联合类型:
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

- RequiredKeys : 用于获取类型中非可空属性, 返回所有非可空属性字面量联合类型:

   ```
      interface T1 {
          a: string;
          b?: string;
          c: string;
          d?: string;
      }

      type T2 = RequiredKeys<T1>;
      // T2: "a" | "c" 
    ```
- UnionToIntersection: 用于将联合类型转为交叉类型:
    ```
     interface T1 
         a: string
     }
     interface T2 
         b: string
     }
     type T3 = UnidKeys<T1>;
     //T3: T1 & T2
    ```
