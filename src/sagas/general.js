import { take, put, call, fork } from "redux-saga/effects";
import { GET_VEHICLES } from "../actions/ActionTypes";
import { SAGA_ALERT_TIMEOUT, SOMETHING_WRONG } from "../constants";
import { getVehiclesSuccess } from "../actions/GeneralActions";
import {
  GET_VEHICLES as GET_VEHICLES_URL,
  callRequest,
} from "../config/WebService";
import ApiSauce from "../services/ApiSauce";
import Util from "../services/Util";

function alert(message, type = "error") {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}
function* getVehicles() {
  while (true) {
    const { responseCallback } = yield take(GET_VEHICLES.REQUEST);
    try {
      const response = yield call(
        callRequest,
        GET_VEHICLES_URL,
        {},
        "",
        {},
        ApiSauce
      );

      if (response) {
        if (responseCallback) responseCallback(true, null);
      } else {
        if (responseCallback) responseCallback(null);
        alert(SOMETHING_WRONG);
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(err.message);
    }
  }
}
export default function* root() {
  yield fork(getVehicles);
}
