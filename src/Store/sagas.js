import { all } from "redux-saga/effects";
import authSaga from "./Auth/saga";
import AdviserSaga from "./Adviser/saga";

export default function* rootSaga() {
  yield all([authSaga(), AdviserSaga()]);
}
