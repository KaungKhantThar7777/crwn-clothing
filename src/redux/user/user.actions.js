import userTypes from "./user.types";

export const googleSigninStart = () => {
  return {
    type: userTypes.GOOGLE_SIGNIN_START,
  };
};

export const signinSuccess = (user) => {
  return {
    type: userTypes.SIGNIN_SUCCESS,
    payload: user,
  };
};
export const signinFailure = (err) => {
  return {
    type: userTypes.SIGNIN_FAILURE,
    payload: err,
  };
};
export const emailSigninStart = (emailAndPassword) => {
  return {
    type: userTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword,
  };
};

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signoutStart = () => ({
  type: userTypes.SIGNOUT_START,
});

export const signoutSuccess = () => ({
  type: userTypes.SIGNOUT_SUCCESS,
});

export const signoutFailure = () => ({
  type: userTypes.SIGNOUT_FAILURE,
});

export const signupStart = (userCredentials) => ({
  type: userTypes.SIGNUP_START,
  payload: userCredentials,
});

export const signupSuccess = ({ user, additionalData }) => ({
  type: userTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signupFailure = (error) => ({
  type: userTypes.SIGNUP_FAILURE,
  payload: error,
});
