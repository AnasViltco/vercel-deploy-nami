import axios from "../../Routes/AxiosConfig";
import { fork, put, all, takeLatest, select } from "redux-saga/effects";
import {
  ADD_ADVISER_CALL,
  ADVISER_STATUS,
  DELETE_ADVISER,
  GET_ADVISER_LIST,
  GET_ADVISER_PROFILE_INFO,
  GET_DROPDOWN_ADVISER_DROPDOWN_VALUE,
} from "./actionTypes";
import { getDropdownAdviserSuccess } from "./actions";
import { sagaErrorHandler } from "../../Shared/HelperMethods/SagaErrorHandler";
import { toast } from "react-toastify";
import { makeSelectAuthToken } from "../selector";

function* getAllDropdownValueReq() {
  const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.get(`admin/advisor/getAllDropDownValues`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(getDropdownAdviserSuccess(response.data.data));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* AddAdviserCalRequest({ payload }) {
  const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.post(`admin/advisor/add`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Adviser add successfully");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* getAdviserProfileInfoRequest({ payload }) {
  console.log("payload", payload);
  const token = yield select(makeSelectAuthToken());
  try {
    // const response = yield axios.post(`admin/advisor/add`, payload, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // toast.success("Adviser add successfully");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* getAdviserListRequest({ payload }) {
  console.log("adviserList =======>>>>>>>");
  const token = yield select(makeSelectAuthToken());
  try {
    // const response = yield axios.post(`admin/advisor/add`, payload, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // toast.success("Adviser add successfully");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* deleteAdviserRequest({ payload }) {
  console.log("adviser delete =======>>>>>>>", payload);
  const token = yield select(makeSelectAuthToken());
  try {
    // const response = yield axios.post(`admin/advisor/add`, payload, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // toast.success("Adviser add successfully");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* adviserStatusRequest({ payload }) {
  console.log("adviser Block / Unblock =======>>>>>>>", payload);
  const token = yield select(makeSelectAuthToken());
  try {
    // const response = yield axios.post(`admin/advisor/add`, payload, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // toast.success("Adviser add successfully");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

export function* watchGetAllDropdownValue() {
  yield takeLatest(GET_DROPDOWN_ADVISER_DROPDOWN_VALUE, getAllDropdownValueReq);
}
export function* watchAddAdviserCalRequest() {
  yield takeLatest(ADD_ADVISER_CALL, AddAdviserCalRequest);
}
export function* watchSetAdviserProfileInfo() {
  yield takeLatest(GET_ADVISER_PROFILE_INFO, getAdviserProfileInfoRequest);
}
export function* watchGetAdviserList() {
  yield takeLatest(GET_ADVISER_LIST, getAdviserListRequest);
}
export function* watchAdviserStatus() {
  yield takeLatest(ADVISER_STATUS, adviserStatusRequest);
}

export default function* adviserSaga() {
  yield all([
    fork(watchGetAllDropdownValue),
    fork(watchAddAdviserCalRequest),
    fork(watchSetAdviserProfileInfo),
    fork(watchGetAdviserList),
    fork(watchAdviserStatus),
  ]);
}
