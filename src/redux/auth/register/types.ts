export enum AuthRegisterActionTypes {
  API_RESPONSE_SUCCESS = "@@auth/register/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@auth/register/API_RESPONSE_ERROR",

  REGISTER_USER = "@@auth/register/REGISTER_USER",
  LOGIN = "@@auth/login/LOGIN",
}

export type IUser = {
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
export interface AuthRegisterState {
  registrationError: any;
  message: string;
  loading: boolean;
  user: IUser | null;
  isUserRegistered: boolean;
}
