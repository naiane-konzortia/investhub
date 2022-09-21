export enum AuthRegisterActionTypes {
  API_RESPONSE_SUCCESS = "@@auth/register/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@auth/register/API_RESPONSE_ERROR",

  REGISTER_USER = "@@auth/register/REGISTER_USER",
  LOGIN = "@@auth/login/LOGIN",
  LOGGED_USER = "@@auth/login/LOGGED_USER",
  GOOGLE_AUTH = "@@auth/login/LINKEDIN_AUTH",
  LINKEDIN_AUTH = "@@auth/login/LINKEDIN_AUTH",
  SIGN_UP = "@@auth/register/SIGN_UP",
  SIGN_UP_DATA = "@@auth/register/SIGN_UP_DATA"
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

export type ISignUp = {
  full_name : string;
  email :string;
  password: string;
  phone : string;
  category :string;
  min_fund: number;
  max_fund: number;
  verified:number;
  lead_type:string;
}
export interface AuthRegisterState {
  registrationError: any;
  message: string;
  loading: boolean;
  user: IUserCallback | null;
  loggedUser:boolean;
  isUserRegistered: boolean;
  linkedinCode: any;
  signUpData:ISignUp | null;
}
