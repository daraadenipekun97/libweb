import api from "../Service";
import { toastr } from "react-redux-toastr";



const baseControllerUser = "api/user/";
const baseControllerServices = "api/services/";


export const getTrendingBooks = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseControllerUser}trending`);
        if (typeof response !== "undefined") {
          if (response.status === 200 && response.data.status === true) {
            return response.data.data.trending_books;
          }
        } else {
          toastr.error("An Error occured", "Could not retrieve trending books");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please Ensure youre logged in");
      }
    }
  };




  export const getTrendingBooksUnauth = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseControllerServices}trending`);
        if (typeof response !== "undefined") {
          if (response.status === 200 && response.data.status === true) {
            return response.data.data;
          }
        } else {
          toastr.error("An Error occured", "Could not retrieve trending books");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please try again");
      }
    }
  };