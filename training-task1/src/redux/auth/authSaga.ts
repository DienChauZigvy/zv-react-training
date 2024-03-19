import { take, fork, call, delay, put } from "redux-saga/effects";
import { LoginPayload, authActions } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(payload: LoginPayload) {
  try {
    console.log("handle login", payload);
    yield delay(1000);
    //   Call API to handel here => yield call(api, payload)
    localStorage.setItem("access_token", "fake token");
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: "User1",
      }),
    );

    // Redirect to Admin page
  } catch (error: any) {
    yield put(authActions.loginFailed(error));
  }
}

function* handleLogout() {
  yield delay(500);
  console.log("handle logout");
  localStorage.removeItem("access_token");
  // Redirect to Login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
