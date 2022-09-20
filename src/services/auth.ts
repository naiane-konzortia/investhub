import APIClient from "./api";
import * as url from "./urls";

const api = new APIClient();
const registerUser = (params: any) => {
  return api.create(`${url.USERS}`, params);
};

const login = (params: any) => {
  return api.create(`${url.API}${url.LOGIN}`, params)
}

const signUp = (params:any) => {
  return api.create(`${url.API}${url.SIGNUP}`, params)
}

const signUpGoogle = (params:any) => {
  return api.create(`${url.API}${url.GOOGLE}${url.LOGIN}`, params)
}

const signUpLinkedin = (params:any) => {
  return api.create(`${url.API}${url.GOOGLE}${url.LOGIN}`, params)
}



export { 
    registerUser, login, signUp, signUpGoogle, signUpLinkedin
};
