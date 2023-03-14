import {
  RESTORE_UPDATE_PROFILE_INITIAL,
  UPDATE_PROFILE_SUCCESS,
  FETCH_PROFILE_SUCCESS,
  ADD_BANK_SUCCESS,
  FETCH_ALL_BANKS_SUCCESS,
  FETCH_WALLET_DETAILS_SUCCESS,
  WITHDRAW_FUNDS_SUCCESS,
  RESTORE_WITHDRAW_FUNDS_INITIAL,
  RESTORE_ADD_BANK_INITIAL,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_TRIAL_SUCCESS,
  RESTORE_CANCEL_SUBSCRIPTION_INITIAL,
  RESTORE_CANCEL_TRIAL_INITIAL,
  REACTIVATE_TRIAL_SUCCESS,
  RESTORE_REACTIVATE_TRIAL_INITIAL,
  REACTIVATE_SUBSCRIPTION_SUCCESS,
  RESTORE_REACTIVATE_SUBSCRIPTION_INITIAL,
  WEB_PURCHASE_SUCCESS,
  RESTORE_WEB_PURCHASE_INITIAL,
  FETCH_SUBSCRIPTION_DETAILS_SUCCESS,
  CHANGE_PASSWORD_SUCCESS,
  RESTORE_CHANGE_PASSWORD_INITIAL,
} from "../ActionTypes";

const INIT_STATE = {
  updateProfileSuccess: false,
  updateProfileFailure: false,
  profileData: {},
  addBankSuccess: false,
  addBankFailure: false,
  allBanks: [],
  walletDetails: {},
  withdrawFundsSuccess: false,
  withdrawFundsFailure: false,

  cancelTrialSuccess: false,
  cancelTrailFailure: false,
  cancelSubscriptionSuccess: false,
  cancelSubscriptionFailure: false,


  reactivateTrialSuccess: false,
  reactivateTrailFailure: false,
  reactivateSubscriptionSuccess: false,
  reactivateSubscriptionFailure: false,

  webPurchaseSuccess: false,
  webPurchaseFailure: false,

  subscriptionDetails: {},
  passwordChangeSuccess: false,
  passwordChangeFailure: false,
};

const profileReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          updateProfileSuccess: true,
          updateProfileFailure: false,
        };
      } else {
        return {
          ...state,
          updateProfileSuccess: false,
          updateProfileFailure: true,
        };
      }
    }

    case RESTORE_UPDATE_PROFILE_INITIAL: {
      return {
        ...state,
        updateProfileSuccess: false,
        updateProfileFailure: false,
      };
    }

    case FETCH_PROFILE_SUCCESS: {
      return {
        ...state,
        profileData: action.payload,
      };
    }

    case ADD_BANK_SUCCESS: {
      if (action.payload === "Bank Details Updated") {
        return {
          ...state,
          addBankSuccess: true,
          addBankFailure: false,
        };
      } else {
        return {
          ...state,
          addBankSuccess: false,
          addBankFailure: true,
        };
      }
    }

    case RESTORE_ADD_BANK_INITIAL: {
      return {
        ...state,
        addBankSuccess: false,
        addBankFailure: false,
      };
    }

    case FETCH_ALL_BANKS_SUCCESS: {
      return {
        ...state,
        allBanks: action.payload,
      };
    }

    case FETCH_WALLET_DETAILS_SUCCESS: {
      return {
        ...state,
        walletDetails: action.payload,
      };
    }

    case WITHDRAW_FUNDS_SUCCESS: {
      if (action.payload === "Balance too Low") {
        return {
          ...state,
          withdrawFundsSuccess: false,
          withdrawFundsFailure: true,
        };
      } else {
        return {
          ...state,
          withdrawFundsSuccess: true,
          withdrawFundsFailure: false,
        };
      }
    }

    case RESTORE_WITHDRAW_FUNDS_INITIAL: {
      return {
        ...state,
        withdrawFundsSuccess: false,
        withdrawFundsFailure: false,
      };
    }

    case CANCEL_TRIAL_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          cancelTrialSuccess: true,
          cancelTrailFailure: false,
        };
      } else {
        return {
          ...state,
          cancelTrialSuccess: false,
          cancelTrailFailure: true,
        };
      }
    }

    case RESTORE_CANCEL_TRIAL_INITIAL: {
      return {
        ...state,
        cancelTrialSuccess: false,
        cancelTrailFailure: false,
      };
    }

    case CANCEL_SUBSCRIPTION_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          cancelSubscriptionSuccess: true,
          cancelSubscriptionFailure: false,
        };
      } else {
        return {
          ...state,
          cancelSubscriptionSuccess: false,
          cancelSubscriptionFailure: true,
        };
      }
    }

    case RESTORE_CANCEL_SUBSCRIPTION_INITIAL: {
      return {
        ...state,
        cancelSubscriptionFailure: false,
        cancelSubscriptionSuccess: false,
      };
    }


    case REACTIVATE_TRIAL_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          reactivateTrialSuccess: true,
          reactivateTrailFailure: false,
        };
      } else {
        return {
          ...state,
          reactivateTrialSuccess: false,
          reactivateTrailFailure: true,
        };
      }
    }

    case RESTORE_REACTIVATE_TRIAL_INITIAL: {
      return {
        ...state,
        reactivateTrialSuccess: false,
        reactivateTrailFailure: false,
      };
    }



    case REACTIVATE_SUBSCRIPTION_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          reactivateSubscriptionSuccess: true,
          reactivateSubscriptionFailure: false,
        };
      } else {
        return {
          ...state,
          reactivateSubscriptionSuccess: false,
          reactivateSubscriptionFailure: true,
        };
      }
    }

    case RESTORE_REACTIVATE_SUBSCRIPTION_INITIAL: {
      return {
        ...state,
        reactivateSubscriptionFailure: false,
        reactivateSubscriptionSuccess: false,
      };
    }





    case FETCH_SUBSCRIPTION_DETAILS_SUCCESS: {
      return {
        ...state,
        subscriptionDetails: action.payload,
      };
    }

    case WEB_PURCHASE_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          webPurchaseSuccess: true,
          webPurchaseFailure: false,
        };
      } else {
        return {
          ...state,
          webPurchaseSuccess: false,
          webPurchaseFailure: true,
        };
      }
    }

    case RESTORE_WEB_PURCHASE_INITIAL: {
      return {
        ...state,
        webPurchaseFailure: false,
        webPurchaseSuccess: false,
      };
    }

    case CHANGE_PASSWORD_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          passwordChangeSuccess: true,
          passwordChangeFailure: false,
        };
      } else {
        return {
          ...state,
          passwordChangeSuccess: false,
          passwordChangeFailure: true,
        };
      }
    }

    case RESTORE_CHANGE_PASSWORD_INITIAL: {
      return {
        ...state,
        passwordChangeFailure: false,
        passwordChangeSuccess: false,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
