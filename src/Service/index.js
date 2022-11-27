import axios from "axios";
import store from "../Store";

let aPIRootUrl = "";
const env = process.env.NODE_ENV;

switch (env) {
  case "local":
    aPIRootUrl = process.env.REACT_APP_API_BASE_LOCAL_URL;
    break;
  case "development":
    aPIRootUrl = process.env.REACT_APP_API_BASE_DEV_URL;
    break;
  case "production":
    aPIRootUrl = process.env.REACT_APP_API_BASE_PROD_URL;
    break;
  default:
    aPIRootUrl = "";
}

const api = axios.create({
  baseURL: aPIRootUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const userDataRegister = JSON.parse(localStorage.getItem("userRegData"));
const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));

const token =
  userDataRegister !== null
    ? userDataRegister.token
    : userDataLogin !== null
    ? userDataLogin.token
    : "";
console.log(userDataRegister);
console.log(`token is ${token}`);

api.interceptors.request.use(function (config) {
  //   const state = typeof store !== 'undefined' ? store.getState() : { auth: {} };
  //   const user = state.auth
  //   const token =  Object.keys(user.registerData).length === 0? user.loginData.token : Object.keys(user.loginData).length === 0 ? user.registerData.token : ""
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
