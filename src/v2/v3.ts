// import { createStore } from "redux";

// interface Foo<A, T extends string> {
//   type: T;
//   value: A;
// }

// interface On<T extends string, A, F extends Foo<A, T>, S> {
//   actions: T[];
//   reducer: (state: S, action: F) => void;
// }

// function on<S, T extends string, A, F extends Foo<A, T>>(
//   foo: F[],
//   callback: (state: S, f: F) => void
// ): On<T, A, F, any> {
//   return {
//     actions: foo.map((f) => f.type),
//     reducer: callback,
//   };
// }

// const makeAction = <T extends string, P>(type: T, payload: P): Foo<P, T> => ({
//   type,
//   value: payload,
// });

// type OnType<T, S> = T extends On<infer T, infer A, infer F, S>
//   ? On<T, A, F, S>
//   : never;

// const makeReducer = <S, O>(initialState: S, ...ons: OnType<O, S>[]) => {

//   ons.forEach(on => {
//     on.reducer(initialState, { type: ''} as any)
//   })

// };

// const james = makeAction("JAMES", 1);
// const peter = makeAction("Peter", { name: "Peter", age: 23 });

// const result = on([james, peter], (s, f) => {
//   if (f.type === "Peter") {
//     const v = f.value;
//   }
// });

// result.reducer(james);

// const state = {
//   user: {
//     name: "james",
//   },
// };

// const someReducer = makeReducer(
//   state,
//   on([james], (sta) => {

//   })
// );
