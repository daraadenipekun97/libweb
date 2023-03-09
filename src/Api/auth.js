import api from "../Service";
import { toastr } from "react-redux-toastr";

/**
 * represents the base controller from the API
 */

const baseController = "api/user/";

export const postRegister = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}register`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          localStorage.clear();
          localStorage.setItem("userRegData", JSON.stringify(response.data));
          toastr.success("Registration Successful", "");
          return response.data;
        } else {
          toastr.error("Something went wrong", `${response.data.message}`);
          return response.data;
        }
      } else {
        toastr.error("Register", "An Error occured while registering you");
      }
    } catch (ex) {
      toastr.error("Register", "An error occured");
    }
  }
};

export const postVerifyUser = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}verify`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Email Verification Successful", "");
          return response.data.status;
        } else {
          toastr.error("Couldnt verify your  email", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("Email Verification", "An Error occured");
      }
    } catch (ex) {
      toastr.error("Email Verification Failed", "Please try again");
      return ex.response.data.message;
    }
  }
};

export const createSendMail = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}resend`);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          toastr.success("Email Resent Successfully", "");
          return response.data.status;
        } else {
          toastr.error("Oops", "Resending Email Failed");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not resend mail");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const postlogin = async (body) => {
  debugger;
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}login`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          localStorage.clear();
          localStorage.setItem("userLoginData", JSON.stringify(response.data));
          // toastr.success("Login Successful", "success");
          return response.data;
        } else {
          toastr.error("User does not exist", "Please check your email and password");
          return response.data;
        }
      } else {
        toastr.error("Login", "Login Failed");
      }
    } catch (ex) {
      toastr.error("Login", `${ex.message}`);
      return ex.message;
    }
  }
};

export const postForgotPassword = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}forgot`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Mail Sent Successfully", "Please check your mail");
          return response.data.status;
        } else {
          toastr.error("Couldnt Find email", "Please ensure this is the email you used to sign up");
          return response.data.status;
        }
      } else {
        toastr.error("Email", "An Error occured");
      }
    } catch (ex) {
      toastr.error("Email", "Please try again");
      //   return ex.response.data.message
    }
  }
};

export const postResetPassword = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}reset`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Reset Password Successful", "");
          return response.data.status;
        } else {
          toastr.error(
            "Couldnt reset password",
            "Please ensure you inputed the correct reset code"
          );
          return response.data.status;
        }
      } else {
        toastr.error("Reset Password", "An Error occured");
      }
    } catch (ex) {
      toastr.error("Reset Password", "Please try again");
      //   return ex.response.data.message
    }
  }
};

export const postGoogleLogin = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}goggle/login`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          localStorage.clear();
          localStorage.setItem("userLoginData", JSON.stringify(response.data));
          toastr.success("Login Successful", "");
          return response.data.status;
        } else {
          toastr.error("Couldnt Login you in", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("Login Failed", "An Error occured");
      }
    } catch (ex) {
      toastr.error("Login Failed", "Please try again");
      //   return ex.response.data.message
    }
  }
};
