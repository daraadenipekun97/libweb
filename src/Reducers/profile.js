import {
    RESTORE_UPDATE_PROFILE_INITIAL,
    UPDATE_PROFILE_SUCCESS
  } from "../ActionTypes";



  const INIT_STATE = {
    
    updateProfileSuccess:false,
    updateProfileFailure:false,

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

          default:
            return state;
        
    }

    
  }


  export default profileReducer;