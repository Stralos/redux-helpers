interface Foo<A, T extends string> {
  type: T;
  value: A;
}

interface On<S, F> {
  reducer: (state: S, action: F) => void;
}

function on<S, T extends string, A, F extends Foo<A, T>>(
  foo: F[],
  callback: (s: S, f: F) => void
): On<S, F> {
  return {
    reducer: callback,
  };
}
const makeReducer = <S>(state: S, ...ons: On<S, any>[]) => {
  
};
const makeAction = <T extends string, P>(type: T, payload: P): Foo<P, T> => ({
  type,
  value: payload,
});

const james = makeAction("JAMES", 1);
const peter = makeAction("Peter", { name: "Peter", age: 23 });
const bob = makeAction("BOB", { gender: 'male'});

const result = on([james, peter], (state, s) => {
  if (s.type === "Peter") {
    const v = s.value;
  }
});

const reducer = makeReducer(
  { name: "james" },
  on([james, peter], (s, a) => {
    if (a.type === 'Peter') {
      const p = a.value
    }
    a.type;
  }),
  on([bob], (s, a) => {
    a.type;
  })
);
