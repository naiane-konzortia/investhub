import APIClient from "./api";
import * as url from "./urls";

const api = new APIClient();
const registerUser = (params: any) => {
  return api.create(`${url.USERS}`, params);
};

const login = (params: any) => {
  return api.create(`${url.API}${url.LOGIN}`, params.data)
}

const signUp = (params:any) => {
  return api.create(`${url.API}${url.SIGNUP}`, params.data)
}

const signUpGoogle = (params:any) => {
  return api.create(`${url.API}${url.GOOGLE}${url.LOGIN}`, params.data)
}

const signUpLinkedin = (params:any) => {
  return api.create(`${url.API}${url.LINKEDIN}${url.LOGIN}`, params.data)
}

// http://168.61.190.151:8050/api/auth/linkedin
const linkedinAccessToken = (params: any) => {
  return api.create(`${url.API}${url.AUTH}${url.LINKEDIN}`,params.data)
}



export { 
    registerUser, login, signUp, signUpGoogle, signUpLinkedin, linkedinAccessToken
};
