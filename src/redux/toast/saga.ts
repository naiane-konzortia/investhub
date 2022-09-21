import { toast } from "react-toastify";
import { all, call, select, takeEvery, fork } from "redux-saga/effects";

import { RootState } from "../store";
import { ToastsActionsType } from "./types";
import { ToastMessage } from "../../components/ToastMessage";

function* showToastMessageSaga(action:any) {
    // const { error, toastType } = action.payload;


    // yield call(toast[toastType], <ToastMessage /> );

}

export function* watchShowToastMessageSaga() {
    yield takeEvery(ToastsActionsType.SHOW_TOAST_MESSAGE, showToastMessageSaga);
}

function* toastsSaga() {
    yield all([
        fork(watchShowToastMessageSaga),
    ]);
}

export default toastsSaga;
