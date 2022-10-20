import axios from "../../Routes/AxiosConfig";
import { fork, put, all, takeLatest } from "redux-saga/effects";
// Login Redux States
import {
  LOGIN,
  REGISTER_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "./actionTypes";
import { loginSuccess, registerUserSuccessful } from "./actions";
import { push } from "connected-react-router";
import { sagaErrorHandler } from "../../Shared/HelperMethods/SagaErrorHandler";
import { toast } from "react-toastify";

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload }) {
  try {
    let data = {
      email: payload.email,
      password: payload.password,
    };
    const response = yield axios.post("admin/login", data);
    if (response.data.data.role === "Admin") {
      payload.history.push("/addAdvisor");
    } else {
      payload.history.push("/dashboard");
    }
    yield put(loginSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* registerUser({ payload }) {
  try {
    let data = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
    const response = yield axios.post("auth/register", data);
    yield put(registerUserSuccessful(response.data));
    yield put(push("/dashboard"));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* forgotPasswordRequest({ payload }) {
  try {
    let data = {
      email: payload.email,
    };
    yield axios.post("admin/forgetPassword", data);
    payload.history.push("/login");
    toast.success("Please check you email");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* resetPasswordRequest({ payload }) {
  try {
    let data = {
      token: payload.token,
      newPassword: payload.password,
    };
    yield axios.put("admin/resetPassword", data);
    toast.success("Password reset successfully");
    payload.history.push("/login");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginUser);
}
export function* watchRegister() {
  yield takeLatest(REGISTER_USER, registerUser);
}
export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordRequest);
}
export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPasswordRequest);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
