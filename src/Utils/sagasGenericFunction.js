import { call, put } from "redux-saga/effects";

function* requestFunction(successFunction, ...aPIRequestFunction) {
  try {
    const response = yield call(...aPIRequestFunction);
    if (typeof response !== "undefined") {
      if (typeof successFunction === "function") yield put(successFunction(response));
    } else {
      console.log("type of Response is undefined");
    }
  } catch (ex) {
    console.log("An exception occured");
  }
}

export default requestFunction;
