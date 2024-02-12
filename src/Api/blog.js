import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseController = "api/services/";

export const getBlogs = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}blog/all`);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve blogs");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};


export const getBlogById = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}blog/find/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not get blog ");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};