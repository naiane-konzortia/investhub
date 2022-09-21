import { AuthRegisterActionTypes } from "./types";

// common success
export const authRegisterApiResponseSuccess = (
  actionType: string,
  data: any
) => ({
  type: AuthRegisterActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const authRegisterApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: AuthRegisterActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const userRegister = (user: any) => {
  return {
    type: AuthRegisterActionTypes.REGISTER_USER,
    payload: { user },
  }; 
};

export const login = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.LOGIN,
    payload: { data },
  };
};

export const setLoggedUser = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.LOGGED_USER,
    payload: { data },
  };
};

export const linkedinAuth = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.LINKEDIN_AUTH,
    payload: { data },
  };
};

export const signUp = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.SIGN_UP,
    payload: { data },
  };
};

export const googleSignUp = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.GOOGLE_AUTH,
    payload: { data },
  };
};

export const linkedinSignUp = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.LINKEDIN_AUTH,
    payload: { data },
  };
};

export const signUpData = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.SIGN_UP_DATA,
    payload: { data },
  };
};

export const setGoogleData = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.GOOGLE_DATA,
    payload: { data },
  };
};

export const setLinkedinAccessToken = (data:{}) => {
  return {
    type: AuthRegisterActionTypes.LINKEDIN_ACCESS_TOKEN,
    payload: { data },
  };
};
