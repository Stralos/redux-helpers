import { createStore } from "./store";
import { getUsersRequestAction, addUserAction } from "./actions";

const store = createStore();
store.dispatch(getUsersRequestAction({ from: "", to: "" }));
store.dispatch(getUsersRequestAction({ from: "20", to: "10" }));
store.dispatch(addUserAction({ name: "James", age: 23, id: 2 }));
