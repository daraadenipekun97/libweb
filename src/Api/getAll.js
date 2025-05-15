import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseController = "api/services/";

export const getCountries = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}countries`);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve countries");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getSongs = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}audio/all`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve songs");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const facebookHide = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    return true;
  }
};



export const getBanners = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}banners`);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve banners");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};