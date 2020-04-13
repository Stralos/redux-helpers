import { takeLatest, put } from "redux-saga/effects";
import { GET_USERS_REQUEST } from './constants'
import {
  getUsersRequestAction,
  getUsersSuccessAction,
  getUsersFailAction,
} from "./actions";

function* getUsersSaga({ payload }: ReturnType<typeof getUsersRequestAction>) {
  try {
    const { from, to } = payload;
    yield put(
      getUsersSuccessAction({ users: [{ name: "Peter", age: 21, id: 0 }] })
    );
  } catch (e) {
    yield put(getUsersFailAction({ ex: "Something bad happened" }));
  }
}

export function* rootSaga() {
  yield takeLatest(GET_USERS_REQUEST, getUsersSaga);
}
