import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import {
  REGISTER,
  VERIFY_USER_EMAIL,
  RESEND_MAIL,
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GOOGLE_LOGIN,
} from "../ActionTypes";

import {
  postRegister,
  postVerifyUser,
  createSendMail,
  postlogin,
  postForgotPassword,
  postResetPassword,
  postGoogleLogin,
} from "../Api";

import {
  registerUserSuccess,
  verifyUserEmailSuccess,
  resendMailSuccess,
  userLoginSuccess,
  forgotPasswordSuccess,
  resetPasswordSuccess,
  googleLoginSuccess,
} from "../Actions";

export const registerRequest = function* ({ payload }) {
  yield call(requestFunction, registerUserSuccess, postRegister, payload);
};

export const userReg = function* () {
  yield takeEvery(REGISTER, registerRequest);
};

export const verifyEmailRequest = function* ({ payload }) {
  yield call(requestFunction, verifyUserEmailSuccess, postVerifyUser, payload);
};

export const verifyEmaill = function* () {
  yield takeEvery(VERIFY_USER_EMAIL, verifyEmailRequest);
};

export const resendMailRequest = function* ({ payload }) {
  yield call(requestFunction, resendMailSuccess, createSendMail, payload);
};

export const resendMaill = function* () {
  yield takeEvery(RESEND_MAIL, resendMailRequest);
};

export const loginRequest = function* ({ payload }) {
  yield call(requestFunction, userLoginSuccess, postlogin, payload);
};

export const userLoginn = function* () {
  yield takeEvery(LOGIN, loginRequest);
};

export const forgotPasswordRequest = function* ({ payload }) {
  yield call(requestFunction, forgotPasswordSuccess, postForgotPassword, payload);
};

export const forgotPass = function* () {
  yield takeEvery(FORGOT_PASSWORD, forgotPasswordRequest);
};

export const resetPasswordRequest = function* ({ payload }) {
  yield call(requestFunction, resetPasswordSuccess, postResetPassword, payload);
};

export const resetPass = function* () {
  yield takeEvery(RESET_PASSWORD, resetPasswordRequest);
};

export const googleLoginRequest = function* ({ payload }) {
  yield call(requestFunction, googleLoginSuccess, postGoogleLogin, payload);
};

export const googleLoginn = function* () {
  yield takeEvery(GOOGLE_LOGIN, googleLoginRequest);
};

export default function* rootSaga() {
  yield all([
    fork(userReg),
    fork(verifyEmaill),
    fork(resendMaill),
    fork(userLoginn),
    fork(forgotPass),
    fork(resetPass),
    fork(googleLoginn),
  ]);
}
