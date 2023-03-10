import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseController = "api/user/";

const baseControllerUser = "api/user/book/";

export const getMyBooks = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}library`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const createGoals = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseControllerUser}goal/add`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Reading Goal Added Successful", "");
          return response.data.status;
        } else {
          toastr.error("Couldnt add reading goal", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("An Error Occured", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
    }
  }
};

export const createReview = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseControllerUser}review/${body.id}`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Review Added Successfully", "");
          return response.data.status;
        } else {
          toastr.error("Couldnt add review", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("An Error Occured", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
    }
  }
};

export const getAllGoals = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}goal`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve reading goals ");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const deleteGoals = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}goal/remove/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Reading Goal Deleted Successfully", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not delete reading goals ");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const sendWishlists = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}wishlist`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Wishlist Sent Successfully", "");
          return response.data.status;
        } else {
          toastr.error("Couldnt send wishlist", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("An Error Occured", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
    }
  }
};

export const getMyFavorites = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}favorites`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve favorites ");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const readBookCurrentlyReading = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}book/read/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          // toastr.success("Reading Goal Deleted Successful", "success");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not read book ");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};
