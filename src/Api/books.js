import api from "../Service";
import { toastr } from "react-redux-toastr";
import { Navigate } from "react-router-dom";

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
      toastr.error("An Error occurred", "Please try again");
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
      toastr.error("An Error occurred", `${ex.response.data.message}`);
    }
  }
};

export const getAllBooks = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}all/books`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve books");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getPopularAuthors = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}popular/authors`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve authors");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getNewReleases = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}new/release`);
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

export const getClassicBooks = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}classic`);
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

export const getKiddiesBook = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}educational`);
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

export const getAllGenre = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}categories`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve genre");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getBooksByGenre = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}categories/books/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getAllBookNames = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}all/books/name`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book names");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getBooksByAuthor = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}authors/books/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getAllAuthors = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}all/authors`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve authors");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getBookDetails = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}book/details/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        } else if (response.status === 200 && response.data.status === false) {
          toastr.error("An Error Occured", `${response.data.message}`);
          let localPart = window.location.href.slice(0, window.location.href.indexOf("/home"));
          window.location.replace(`${localPart}`);
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve book");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Something went wrong");
      let localPart = window.location.href.slice(0, window.location.href.indexOf("/home"));
      window.location.replace(`${localPart}`);
    }
  }
};

export const addFav = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}book/favorite/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Book Added to Favourite Successfully", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not add book to favourite");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const removeFav = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerUser}book/unfavorite/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Book Removed from Favourite Successfully", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not remove book from favourite");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getAuthorById = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`/${baseControllerUser}author/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not add book to favourite");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const searchAllBooks = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseControllerUser}book/search`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          // toastr.success("Review Added Successful", "success");
          return response.data.data;
        } else {
          toastr.error("An Error Occured", "Please try again");
          // return response.data.status;
        }
      } else {
        toastr.error("An Error Occured", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
      let localPart = window.location.href.slice(0, window.location.href.indexOf("/home"));
      window.location.replace(`${localPart}/home/dashboard`);
    }
  }
};

export const searchAllBooksUnauth = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseControllerServices}book/search`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          // toastr.success("Review Added Successful", "success");
          return response.data.data;
        } else {
          toastr.error("An Error Occured", "Please try again");
          // return response.data.status;
        }
      } else {
        toastr.error("An Error Occured", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
      let localPart = window.location.href.slice(0, window.location.href.indexOf("/home"));
      window.location.replace(`${localPart}`);
    }
  }
};
