import { createStore } from './store';
import { getUsersRequestAction } from './actions';

const store = createStore();
store.dispatch(getUsersRequestAction({ from: '', to: ''}));
store.dispatch(getUsersRequestAction({ from: '20', to: '10'}));