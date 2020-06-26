import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGNIN_SUCCESS:
    case userTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case userTypes.SIGNIN_FAILURE:
    case userTypes.SIGNOUT_FAILURE:
    case userTypes.SIGNUP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
