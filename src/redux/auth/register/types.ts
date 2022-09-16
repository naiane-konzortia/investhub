export enum AuthRegisterActionTypes {
  API_RESPONSE_SUCCESS = "@@auth/register/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@auth/register/API_RESPONSE_ERROR",

  REGISTER_USER = "@@auth/register/REGISTER_USER",
  LOGIN = "@@auth/login/LOGIN",
  LOGGED_USER = "@@auth/login/LOGGED_USER"
}

export type IUserCallback = {
 wt:{
  Ad:string;
  rV: string;
  uT:string;
  hK:string;
  cu:string;
  googleId:string;
 };
 tokenId:string;
}

export type IUser = {
  email:string;
  password:string;
}
export interface AuthRegisterState {
  registrationError: any;
  message: string;
  loading: boolean;
  user: IUserCallback | null;
  loggedUser:IUser | null;
  isUserRegistered: boolean;
}
