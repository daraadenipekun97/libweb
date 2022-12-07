import {
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    RESTORE_UPDATE_PROFILE_INITIAL
  } from "../ActionTypes";
 
  
  export const updateProfile = ({ 

    firstname,
    lastname,
    phone,
    dob,
    country_id,
    gender,

   }) => ({
    type: UPDATE_PROFILE,
    payload: {
        firstname,
        lastname,
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
  
  