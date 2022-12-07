
import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseController = "api/user/profile/";


export const updateProfile = async (body) => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseController}update`, body);
        if (typeof response !== "undefined") {
          if (response.status === 200 && response.data.status === true) {
            toastr.success("Update Profile", "success");
            return response.data.status;
          } else {
            toastr.error("Something went wrong", `${response.data.message}`);
            return response.data.status;
          }
        } else {
          toastr.error("Update Profile", "An Error occured while updating profile");
        }
      } catch (ex) {
        toastr.error("Update Profile", "An error occured");
      }
    }
  };
  