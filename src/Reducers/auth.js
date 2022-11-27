import {
  REGISTER_SUCCESS,
  RESTORE_REGISTER_INITIAL,
  VERIFY_USER_EMAIL_SUCCESS,
  RESTORE_VERIFY_USER_EMAIL_INITIAL,
  RESEND_MAIL_SUCCESS,
  RESTORE_RESEND_MAIL_INITIAL,
  LOGIN_SUCCESS,
  RESTORE_LOGIN_INITIAL,
  FORGOT_PASSWORD_SUCCESS,
  RESTORE_FORGOT_PASSWORD_INITIAL,
  RESET_PASSWORD_SUCCESS,
  RESTORE_RESET_PASSWORD_INITIAL,
  GOOGLE_LOGIN_SUCCESS,
  RESTORE_GOOGLE_LOGIN_INITIAL,
} from "../ActionTypes";

const INIT_STATE = {
  registerSuccess: false,
  registerFailure: false,
  registerData: {},
  verifyUserSuccess: false,
  verifyUserFailure: false,
  resendMailSuccess: false,
  resendMailFailure: false,

  loginSuccess: false,
  loginFailure: false,
  loginData: {},

  forgotPasswordSuccess: false,
  forgotPasswordFailure: false,

  resetPasswordSuccess: false,
  resetPasswordFailure: false,

  googleLoginSuccess: false,
  googleLoginFailure: false,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      if (action.payload.status === true) {
        return {
          ...state,
          registerSuccess: true,
          registerFailure: false,
          registerData: action.payload,
        };
      } else {
        return {
          ...state,
          registerSuccess: false,
          registerFailure: true,
          registerData: {},
        };
      }
    }

    case RESTORE_REGISTER_INITIAL: {
      return {
        ...state,
        registerSuccess: false,
        registerFailure: false,
        registerData: {},
      };
    }

    case VERIFY_USER_EMAIL_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          verifyUserSuccess: true,
          verifyUserFailure: false,
        };
      } else {
        return {
          ...state,
          verifyUserSuccess: false,
          verifyUserFailure: true,
        };
      }
    }

    case RESTORE_VERIFY_USER_EMAIL_INITIAL: {
      return {
        ...state,
        verifyUserFailure: false,
        verifyUserSuccess: false,
      };
    }

    case RESEND_MAIL_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          resendMailSuccess: true,
          resendMailFailure: false,
        };
      } else {
        return {
          ...state,
          resendMailSuccess: false,
          resendMailFailure: true,
        };
      }
    }

    case RESTORE_RESEND_MAIL_INITIAL: {
      return {
        ...state,
        resendMailSuccess: false,
        resendMailFailure: false,
      };
    }

    case LOGIN_SUCCESS: {
      if (action.payload.status === true) {
        return {
          ...state,
          loginSuccess: true,
          loginFailure: false,
          loginData: action.payload,
        };
      } else {
        return {
          ...state,
          loginSuccess: false,
          loginFailure: true,
          loginData: {},
        };
      }
    }

    case RESTORE_LOGIN_INITIAL: {
      return {
        ...state,
        loginSuccess: false,
        loginFailure: false,
        loginData: {},
      };
    }

    case FORGOT_PASSWORD_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          forgotPasswordSuccess: true,
          forgotPasswordFailure: false,
        };
      } else {
        return {
          ...state,
          forgotPasswordSuccess: false,
          forgotPasswordFailure: true,
        };
      }
    }

    case RESTORE_FORGOT_PASSWORD_INITIAL: {
      return {
        ...state,
        forgotPasswordFailure: false,
        forgotPasswordSuccess: false,
      };
    }

    case RESET_PASSWORD_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          resetPasswordSuccess: true,
          resetPasswordFailure: false,
        };
      } else {
        return {
          ...state,
          resetPasswordSuccess: false,
          resetPasswordFailure: true,
        };
      }
    }

    case RESTORE_RESET_PASSWORD_INITIAL: {
      return {
        ...state,
        resetPasswordFailure: false,
        resetPasswordSuccess: false,
      };
    }

    case GOOGLE_LOGIN_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          googleLoginSuccess: true,
          googleLoginFailure: false,
        };
      } else {
        return {
          ...state,
          googleLoginSuccess: false,
          googleLoginFailure: true,
        };
      }
    }

    case RESTORE_GOOGLE_LOGIN_INITIAL: {
      return {
        ...state,
        googleLoginFailure: false,
        googleLoginSuccess: false,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
