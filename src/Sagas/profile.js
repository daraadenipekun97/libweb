import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";


import {
    UPDATE_PROFILE
  } from "../ActionTypes";



  import {
   updateProfile
  } from "../Api";
  

  import {
    updateProfileSuccess
  } from "../Actions";



  export const updateProfileRequest = function* ({ payload }) {
    yield call(requestFunction, updateProfileSuccess, updateProfile, payload);
  };
  
  export const updateProfil = function* () {
    yield takeEvery(UPDATE_PROFILE, updateProfileRequest);
  };



  export default function* rootSaga() {
    yield all([
      fork(updateProfil),
    ]);
  }
  