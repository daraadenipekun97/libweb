import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseController = "api/user/";

export const getArticleTopics = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}article/topics`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve topics");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getAllArticles = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}article/all`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve articles");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getArticleByTpic = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}article/topic/get/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not get topics");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const createArrticle = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}article/create`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success(
            "Article Submitted Successful",
            "You will receive a link to share this article"
          );
          return response.data.status;
        } else {
          toastr.error("Could not submit article", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("Something went wrong", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
    }
  }
};

export const updateArrticle = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}article/edit/${body.article_id}`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Article Edited Successful", "");
          return response.data.status;
        } else {
          toastr.error("Could not edit article", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("Something went wrong", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
    }
  }
};

export const voteForArticle = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}article/vote/${id}`);
      if (typeof response !== "undefined") {
        console.log(response)
        if (response.status === 200 && response.data.status === true) {
          toastr.success("You have voted successfully", "");
          return response.data.status;
        }
        else{
          toastr.warning(`${response.data.message}`, "")
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getArticleById = async (id) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}article/get/${id}`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not get article");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getArticleByUser = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}article/user/all`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve article");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const addArticleLink = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}article/link/${body.article_id}`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          // toastr.success("Article link added Successful", "");
          return response.data.status;
        } else {
          toastr.error("Could not add article link", "Please try again");
          return response.data.status;
        }
      } else {
        toastr.error("Something went wrong", "Please try again");
      }
    } catch (ex) {
      toastr.error("An Error Occured", "Please try again");
      //   return ex.response.data.message
    }
  }
};

