import { fork } from "redux-saga/effects";
import general from "./general";

export default function* root() {
  yield fork(general);
}
