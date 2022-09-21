export enum AuthRegisterActionTypes {
  API_RESPONSE_SUCCESS = "@@auth/register/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@auth/register/API_RESPONSE_ERROR",

  REGISTER_USER = "@@auth/register/REGISTER_USER",
  LOGIN = "@@auth/login/LOGIN",
  LOGGED_USER = "@@auth/login/LOGGED_USER",
  GOOGLE_AUTH = "@@auth/login/LINKEDIN_AUTH",
  LINKEDIN_AUTH = "@@auth/login/LINKEDIN_AUTH",
  SIGN_UP = "@@auth/register/SIGN_UP",
  SIGN_UP_DATA = "@@auth/register/SIGN_UP_DATA",
  GOOGLE_DATA = "@@auth/register/GOOGLE_DATA",
  LINKEDIN_ACCESS_TOKEN = "@@auth/register/LINKEDIN_ACCESS_TOKEN",
  LINKEDIN_USER_DATA = "@@auth/register/LINKEDIN_USER_DATA"
}

export type IUserLogged = {
  category:any,
  email:any,
  full_name:any,
  lead_type:any,
  max_fund:any,
  min_fund: any,
  phone:any
}
export type IUserCallback = {
 profileObj:{
  email:string;
  familyName: string;
  givenName:string;
  imageUrl:string;
  name:string;
 };
 tokenId:string;
 accessToken:string;
 googleId:string;
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

export type ILinkedInAccessToken = {
  access_token:string;
  expires_in:number;
}
export interface AuthRegisterState {
  registrationError: any;
  message: string;
  loading: boolean;
  user: IUserLogged | null;
  loggedUser:boolean;
  isUserRegistered: boolean;
  linkedinCode: any;
  signUpData:ISignUp | null;
  googleData: IUserCallback | null;
  registerUser:boolean;
  linkedinAccessToken:ILinkedInAccessToken | null;
  linkedinUserData:any;
  linkedinEmail:any;
}
