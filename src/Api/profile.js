import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseController = "api/user/profile/";
const baseControllerBank = "api/user/profile/bank/";
const baseControllerWallet = "api/user/wallet/";
const baseControllerCancelSubscription = "api/user/profile/cancel/";
const baseControllerReactivateSubscription = "api/user/profile/reactivate/";
const baseControllerPayment = "api/user/payment/";

export const updateProfile = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}update`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Profile Updated Successfully", "");
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

export const getProfile = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}data`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve profile");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const createBankDetails = async (body) => {
  debugger;
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseControllerBank}save`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          toastr.success("Bank Details Saved Successfully", "");
          return response.data.message;
        } else {
          toastr.error("Something went wrong", `${response.data.message}`);
          return response.data.message;
        }
      } else {
        toastr.error("Create Bank Details", "An Error occured while updating profile");
      }
    } catch (ex) {
      toastr.error("Create Bank Details", "An error occured");
    }
  }
};

export const getAllBanks = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerBank}all`);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve profile");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getWalletDetails = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerWallet}details`);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          return response.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve wallet");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const withdrawWalletFunds = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseControllerWallet}withdraw`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          toastr.success("Wallet Withdrawal Successful", "");
          return response.data.message;
        } else {
          toastr.error("Something went wrong", `${response.data.message}`);
          return response.data.message;
        }
      } else {
        toastr.error("wallet withdrawal", "An Error occured");
      }
    } catch (ex) {
      toastr.error("wallet withdrawal", `${ex.response.data.message}`);
      return ex.response.data.message;
    }
  }
};

export const cancelTrial = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerCancelSubscription}trial`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Trial Subscription Cancelled Successfully", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not cancel Trial Subscription");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const cancelSub = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerCancelSubscription}subscription`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Subscription Cancelled Successfully", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not cancel Subscription");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};




export const reactivateTrial = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerReactivateSubscription}trial`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Trial Subscription Reactivated Successfully", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not reactivate Trial Subscription");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};



export const reactivateSub = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseControllerReactivateSubscription}subscription`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Subscription Reactivated Successfully", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not reactivate Subscription");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const getSubscriptionDetails = async () => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(`${baseController}subscription/details`);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status) {
          return response.data.data;
        }
      } else {
        toastr.error("An Error occured", "Could not retrieve subscription details");
      }
    } catch (ex) {
      toastr.error("An Error occurred", "Please try again");
    }
  }
};

export const makeWebPurchase = async (param) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.get(
        `${baseControllerPayment}callbackTest?trxref=${param.trxref}&reference=${param.reference}`
      );
      console.log(response);
      if (typeof response !== "undefined") {
        if (response.status === 200) {
          toastr.success("You have successfully subscribed", "");
          return response.data.status;
        }
      } else {
        toastr.error("An Error occured", "Could not process your subscription");
      }
    } catch (ex) {
      toastr.error("An Error occurred", `${ex.response.data.message}`);
    }
  }
};

export const changePass = async (body) => {
  if (navigator.onLine === false) {
    toastr.error("No Internet Connection", "Please try again");
  } else {
    try {
      const response = await api.post(`${baseController}update/password`, body);
      if (typeof response !== "undefined") {
        if (response.status === 200 && response.data.status === true) {
          toastr.success("Password Updated Successfully", "");
          return response.data.status;
        } else {
          toastr.error("Something went wrong", `${response.data.message}`);
          return response.data.status;
        }
      } else {
        toastr.error("Password Update", "An Error occured");
      }
    } catch (ex) {
      toastr.error("Password Update", `${ex.response.data.message}`);
      return ex.response.data.message;
    }
  }
};
