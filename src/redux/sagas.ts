import { all } from "redux-saga/effects";

//auth
import registerSaga from "./auth/register/saga";
import toastsSaga from "./toast/saga";


export default function* rootSaga() {
  yield all([
    registerSaga(),
    toastsSaga(),

  ]);
}
