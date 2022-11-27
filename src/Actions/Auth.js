import {
  REGISTER,
  REGISTER_SUCCESS,
  RESTORE_REGISTER_INITIAL,
  VERIFY_USER_EMAIL,
  VERIFY_USER_EMAIL_SUCCESS,
  RESTORE_VERIFY_USER_EMAIL_INITIAL,
  RESEND_MAIL,
  RESEND_MAIL_SUCCESS,
  RESTORE_RESEND_MAIL_INITIAL,
  LOGIN,
  LOGIN_SUCCESS,
  RESTORE_LOGIN_INITIAL,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  RESTORE_FORGOT_PASSWORD_INITIAL,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESTORE_RESET_PASSWORD_INITIAL,
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  RESTORE_GOOGLE_LOGIN_INITIAL,
} from "../ActionTypes";

export const registerUser = ({
  firstname,
  lastname,
  email,
  phone,
  dob,
  country_id,
  password,
  device,
}) => ({
  type: REGISTER,
  payload: {
    firstname,
    lastname,
    email,
    phone,
    dob,
    country_id,
    password,
    device,
  },
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const restoreRegisterInitial = () => ({
  type: RESTORE_REGISTER_INITIAL,
});

export const verifyUserEmail = ({ code }) => ({
  type: VERIFY_USER_EMAIL,
  payload: {
    code,
  },
});

export const verifyUserEmailSuccess = (payload) => ({
  type: VERIFY_USER_EMAIL_SUCCESS,
  payload,
});

export const restoreVerifyUserEmailInitial = () => ({
  type: RESTORE_VERIFY_USER_EMAIL_INITIAL,
});

export const resendMail = () => ({
  type: RESEND_MAIL,
});

export const resendMailSuccess = (payload) => ({
  type: RESEND_MAIL_SUCCESS,
  payload,
});

export const restoreResendMailInitial = () => ({
  type: RESTORE_RESEND_MAIL_INITIAL,
});

export const userLogin = ({ email, password }) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const userLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const restoreUserLoginInitial = () => ({
  type: RESTORE_LOGIN_INITIAL,
});

export const forgotPassword = ({ email }) => ({
  type: FORGOT_PASSWORD,
  payload: {
    email,
  },
});

export const forgotPasswordSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const restoreForgotPasswordInitial = () => ({
  type: RESTORE_FORGOT_PASSWORD_INITIAL,
});

export const resetPassword = ({ token, password }) => ({
  type: RESET_PASSWORD,
  payload: {
    token,
    password,
  },
});

export const resetPasswordSuccess = (payload) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

export const restoreResetPasswordInitial = () => ({
  type: RESTORE_RESET_PASSWORD_INITIAL,
});

export const googleLogin = ({ name, email, uid, photo_url, device, country_id }) => ({
  type: GOOGLE_LOGIN,
  payload: {
    name,
    email,
    uid,
    photo_url,
    device,
    country_id,
  },
});

export const googleLoginSuccess = (payload) => ({
  type: GOOGLE_LOGIN_SUCCESS,
  payload,
});

export const restoreGoogleLoginSuccessInitial = () => ({
  type: RESTORE_GOOGLE_LOGIN_INITIAL,
});
