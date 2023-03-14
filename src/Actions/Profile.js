import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  RESTORE_UPDATE_PROFILE_INITIAL,
  ADD_BANK,
  ADD_BANK_SUCCESS,
  FETCH_ALL_BANKS,
  FETCH_ALL_BANKS_SUCCESS,
  FETCH_WALLET_DETAILS,
  FETCH_WALLET_DETAILS_SUCCESS,
  WITHDRAW_FUNDS,
  WITHDRAW_FUNDS_SUCCESS,
  RESTORE_ADD_BANK_INITIAL,
  RESTORE_WITHDRAW_FUNDS_INITIAL,
  CANCEL_SUBSCRIPTION,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_TRIAL,
  CANCEL_TRIAL_SUCCESS,
  RESTORE_CANCEL_SUBSCRIPTION_INITIAL,
  RESTORE_CANCEL_TRIAL_INITIAL,
  REACTIVATE_TRIAL,
  REACTIVATE_TRIAL_SUCCESS,
  RESTORE_REACTIVATE_TRIAL_INITIAL,
  REACTIVATE_SUBSCRIPTION,
  REACTIVATE_SUBSCRIPTION_SUCCESS,
  RESTORE_REACTIVATE_SUBSCRIPTION_INITIAL,
  WEB_PURCHASE,
  WEB_PURCHASE_SUCCESS,
  RESTORE_WEB_PURCHASE_INITIAL,
  FETCH_SUBSCRIPTION_DETAILS,
  FETCH_SUBSCRIPTION_DETAILS_SUCCESS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  RESTORE_CHANGE_PASSWORD_INITIAL,
} from "../ActionTypes";

export const fetchProfile = () => ({
  type: FETCH_PROFILE,
});

export const fetchProfileSuccess = (payload) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload,
});

export const updateProfile = ({ fullname, phone, dob, country_id, gender }) => ({
  type: UPDATE_PROFILE,
  payload: {
    fullname,
    phone,
    dob,
    country_id,
    gender,
  },
});

export const updateProfileSuccess = (payload) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload,
});

export const restoreUpdateProfileInitial = () => ({
  type: RESTORE_UPDATE_PROFILE_INITIAL,
});

export const addBank = ({ bank_code, account_number }) => ({
  type: ADD_BANK,
  payload: {
    bank_code,
    account_number,
  },
});

export const addBankSuccess = (payload) => ({
  type: ADD_BANK_SUCCESS,
  payload,
});

export const restoreAddBankInitial = () => ({
  type: RESTORE_ADD_BANK_INITIAL,
});

export const fetchAllBanks = () => ({
  type: FETCH_ALL_BANKS,
});

export const fetchAllBanksSuccess = (payload) => ({
  type: FETCH_ALL_BANKS_SUCCESS,
  payload,
});

export const fetchWalletDetails = () => ({
  type: FETCH_WALLET_DETAILS,
});

export const fetchWalletDetailsSuccess = (payload) => ({
  type: FETCH_WALLET_DETAILS_SUCCESS,
  payload,
});

export const withdrawFunds = ({ amount }) => ({
  type: WITHDRAW_FUNDS,
  payload: {
    amount,
  },
});

export const withdrawFundsSuccess = (payload) => ({
  type: WITHDRAW_FUNDS_SUCCESS,
  payload,
});

export const restoreWithdrawFundsInitial = () => ({
  type: RESTORE_WITHDRAW_FUNDS_INITIAL,
});

export const cancelTrial = () => ({
  type: CANCEL_TRIAL,
});

export const cancelTrialSuccess = (payload) => ({
  type: CANCEL_TRIAL_SUCCESS,
  payload,
});

export const restoreCancelTrialInitial = () => ({
  type: RESTORE_CANCEL_TRIAL_INITIAL,
});

export const cancelSubscription = () => ({
  type: CANCEL_SUBSCRIPTION,
});

export const cancelSubscriptionSuccess = (payload) => ({
  type: CANCEL_SUBSCRIPTION_SUCCESS,
  payload,
});

export const restoreCancelSubscriptionInitial = () => ({
  type: RESTORE_CANCEL_SUBSCRIPTION_INITIAL,
});


export const reactivateTrial = () => ({
  type: REACTIVATE_TRIAL,
});

export const reactivateTrialSuccess = (payload) => ({
  type: REACTIVATE_TRIAL_SUCCESS,
  payload,
});

export const restoreReactivateTrialInitial = () => ({
  type: RESTORE_REACTIVATE_TRIAL_INITIAL,
});

export const reactivateSubscription = () => ({
  type: REACTIVATE_SUBSCRIPTION,
});

export const reactivateSubscriptionSuccess = (payload) => ({
  type: REACTIVATE_SUBSCRIPTION_SUCCESS,
  payload,
});

export const restoreReactivateSubscriptionInitial = () => ({
  type: RESTORE_REACTIVATE_SUBSCRIPTION_INITIAL,
});

export const fetchSubscriptionDetails = () => ({
  type: FETCH_SUBSCRIPTION_DETAILS,
});

export const fetchSubscriptionDetailsSuccess = (payload) => ({
  type: FETCH_SUBSCRIPTION_DETAILS_SUCCESS,
  payload,
});

export const webPurchase = (param) => ({
  type: WEB_PURCHASE,
  payload: param,
});

export const webPurchaseSuccess = (payload) => ({
  type: WEB_PURCHASE_SUCCESS,
  payload,
});

export const restoreWebPurchaseInitial = () => ({
  type: RESTORE_WEB_PURCHASE_INITIAL,
});

export const changePassword = ({ current_password, password }) => ({
  type: CHANGE_PASSWORD,
  payload: {
    password,
    current_password,
  },
});

export const changePasswordSuccess = (payload) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload,
});

export const restoreChangePasswordInitial = () => ({
  type: RESTORE_CHANGE_PASSWORD_INITIAL,
});
