import APIClient from "./api";
import * as url from "./urls";

const api = new APIClient();

const registerUser = (params: any) => {
  return api.create(`${url.USERS}`, params);
};

const login = (params: any) => {
  return api.create(`${url.USERS}${url.LOGIN}`, params)
}

export { 
    registerUser, login
};
