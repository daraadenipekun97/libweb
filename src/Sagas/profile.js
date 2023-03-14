import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import {
  UPDATE_PROFILE,
  FETCH_PROFILE,
  ADD_BANK,
  FETCH_ALL_BANKS,
  FETCH_WALLET_DETAILS,
  WITHDRAW_FUNDS,
  CANCEL_SUBSCRIPTION,
  CANCEL_TRIAL,
  REACTIVATE_SUBSCRIPTION,
  REACTIVATE_TRIAL,
  WEB_PURCHASE,
  FETCH_SUBSCRIPTION_DETAILS,
  CHANGE_PASSWORD,
} from "../ActionTypes";

import {
  updateProfile,
  getProfile,
  createBankDetails,
  getAllBanks,
  getWalletDetails,
  withdrawWalletFunds,
  cancelTrial,
  cancelSub,
  reactivateTrial,
  reactivateSub,
  makeWebPurchase,
  getSubscriptionDetails,
  changePass,
} from "../Api";

import {
  updateProfileSuccess,
  fetchProfileSuccess,
  addBankSuccess,
  fetchAllBanksSuccess,
  fetchWalletDetailsSuccess,
  withdrawFundsSuccess,
  cancelTrialSuccess,
  cancelSubscriptionSuccess,
  reactivateTrialSuccess,
  reactivateSubscriptionSuccess,
  webPurchaseSuccess,
  fetchSubscriptionDetailsSuccess,
  changePasswordSuccess,
} from "../Actions";

export const updateProfileRequest = function* ({ payload }) {
  yield call(requestFunction, updateProfileSuccess, updateProfile, payload);
};

export const updateProfil = function* () {
  yield takeEvery(UPDATE_PROFILE, updateProfileRequest);
};

export const fetchProfileRequest = function* ({ payload }) {
  yield call(requestFunction, fetchProfileSuccess, getProfile, payload);
};

export const fetchProfil = function* () {
  yield takeEvery(FETCH_PROFILE, fetchProfileRequest);
};

export const addBankRequest = function* ({ payload }) {
  yield call(requestFunction, addBankSuccess, createBankDetails, payload);
};

export const addBankDetailss = function* () {
  yield takeEvery(ADD_BANK, addBankRequest);
};

export const fetchAllBankRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllBanksSuccess, getAllBanks, payload);
};

export const fetchBankss = function* () {
  yield takeEvery(FETCH_ALL_BANKS, fetchAllBankRequest);
};

export const fetchWalletRequest = function* ({ payload }) {
  yield call(requestFunction, fetchWalletDetailsSuccess, getWalletDetails, payload);
};

export const fetchWallett = function* () {
  yield takeEvery(FETCH_WALLET_DETAILS, fetchWalletRequest);
};

export const withdrawFundsRequest = function* ({ payload }) {
  yield call(requestFunction, withdrawFundsSuccess, withdrawWalletFunds, payload);
};

export const withdrawFundss = function* () {
  yield takeEvery(WITHDRAW_FUNDS, withdrawFundsRequest);
};

export const cancelTrailRequest = function* ({ payload }) {
  yield call(requestFunction, cancelTrialSuccess, cancelTrial, payload);
};

export const cancelTriiall = function* () {
  yield takeEvery(CANCEL_TRIAL, cancelTrailRequest);
};

export const cancelSubscriptionRequest = function* ({ payload }) {
  yield call(requestFunction, cancelSubscriptionSuccess, cancelSub, payload);
};

export const cancelSubs = function* () {
  yield takeEvery(CANCEL_SUBSCRIPTION, cancelSubscriptionRequest);
};



export const reactivateTrailRequest = function* ({ payload }) {
  yield call(requestFunction, reactivateTrialSuccess, reactivateTrial, payload);
};

export const reactivateTTriiall = function* () {
  yield takeEvery(REACTIVATE_TRIAL, reactivateTrailRequest);
};


export const reactivateSubscriptionRequest = function* ({ payload }) {
  yield call(requestFunction, reactivateSubscriptionSuccess, reactivateSub, payload);
};

export const reactivateSubs = function* () {
  yield takeEvery(REACTIVATE_SUBSCRIPTION, reactivateSubscriptionRequest);
};



export const webPurchaseRequest = function* ({ payload }) {
  yield call(requestFunction, webPurchaseSuccess, makeWebPurchase, payload);
};

export const webPurchasseee = function* () {
  yield takeEvery(WEB_PURCHASE, webPurchaseRequest);
};

export const fetchSubDetailsRequest = function* ({ payload }) {
  yield call(requestFunction, fetchSubscriptionDetailsSuccess, getSubscriptionDetails, payload);
};

export const fetchSubDetaillss = function* () {
  yield takeEvery(FETCH_SUBSCRIPTION_DETAILS, fetchSubDetailsRequest);
};

export const changePasswordRequest = function* ({ payload }) {
  yield call(requestFunction, changePasswordSuccess, changePass, payload);
};

export const changePasswordd = function* () {
  yield takeEvery(CHANGE_PASSWORD, changePasswordRequest);
};

export default function* rootSaga() {
  yield all([
    fork(updateProfil),
    fork(fetchProfil),
    fork(addBankDetailss),
    fork(fetchBankss),
    fork(fetchWallett),
    fork(withdrawFundss),
    fork(cancelTriiall),
    fork(cancelSubs),
    fork(reactivateTTriiall),
    fork(reactivateSubs),
    fork(webPurchasseee),
    fork(fetchSubDetaillss),
    fork(changePasswordd),

  ]);
}
