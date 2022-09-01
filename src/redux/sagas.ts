import { all } from "redux-saga/effects";

//auth
import registerSaga from "./auth/register/saga";


export default function* rootSaga() {
  yield all([
    registerSaga(),
  
  ]);
}
