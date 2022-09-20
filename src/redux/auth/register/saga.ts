import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { setCookie } from "nookies";
//Account Redux states
import { AuthRegisterActionTypes } from "./types";
import {
  authRegisterApiResponseSuccess,
  authRegisterApiResponseError,
} from "./actions";

import {
  registerUser as registerUserApi,
  login as loginApi,
  signUp as signUpApi,
  signUpGoogle as signUpGoogleApi,
  signUpLinkedin as signUpLinkedinApi
 } from "../../../services";

 const myDomain = process.env.REACT_APP_PUBLIC_DOMAIN;


//Include Both Helper File with needed methods

// Is user register successfull then direct plot user in redux.
function* signUp({ payload: user }: any) {
  try {
    const response: Promise<any> = yield call(signUpApi, user);
    yield put(
      authRegisterApiResponseSuccess(
        AuthRegisterActionTypes.SIGN_UP,
        response
      )
    );
  } catch (error: any) {
    yield put(
      authRegisterApiResponseError(AuthRegisterActionTypes.SIGN_UP, error)
    );
  }
}

function* signUpGoogle({ payload: data }: any) {
  try {
    const response: Promise<any> = yield call(signUpGoogleApi, data);
    yield put(
      authRegisterApiResponseSuccess(
        AuthRegisterActionTypes.GOOGLE_AUTH,
        response
      )
    );
  } catch (error: any) {
    yield put(
      authRegisterApiResponseError(AuthRegisterActionTypes.GOOGLE_AUTH, error)
    );
  }
}

function* signUpLinkedin({ payload: data }: any) {
  try {
    const response: Promise<any> = yield call(signUpLinkedinApi, data);
    yield put(
      authRegisterApiResponseSuccess(
        AuthRegisterActionTypes.LINKEDIN_AUTH,
        response
      )
    );
  } catch (error: any) {
    yield put(
      authRegisterApiResponseError(AuthRegisterActionTypes.LINKEDIN_AUTH, error)
    );
  }
}

function* login({ payload: data }: any) {
  try {
    const response: Promise<any> = yield call(loginApi, data);
    yield put(
      authRegisterApiResponseSuccess(
        AuthRegisterActionTypes.LOGIN,
        response
      )
    );
  } catch (error: any) {
    yield put(
      authRegisterApiResponseError(AuthRegisterActionTypes.LOGIN, error)
    );
  }
}



export function* watchUserSignUp() {
  yield takeEvery(AuthRegisterActionTypes.SIGN_UP, signUp);
}

export function* watchSignUpGoogle() {
  yield takeEvery(AuthRegisterActionTypes.GOOGLE_AUTH, signUpGoogle);
}

export function* watchSignUpLinkedin() {
  yield takeEvery(AuthRegisterActionTypes.LINKEDIN_AUTH, signUpLinkedin);
}

export function* watchLogin() {
  yield takeEvery(AuthRegisterActionTypes.LOGIN, login);
}




function* registerSaga() {
  yield all([
    fork(watchUserSignUp),
    fork(watchSignUpGoogle),
    fork(watchSignUpLinkedin),
    fork(watchLogin),
  ]);
}

export default registerSaga;

