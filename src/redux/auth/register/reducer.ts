import { AuthRegisterActionTypes, AuthRegisterState } from "./types";

export const INIT_STATE: AuthRegisterState = {
  registrationError: null,
  message: "",
  loading: false,
  user: null,
  isUserRegistered: false,
  loggedUser:false,
  linkedinCode:null,
  signUpData:null
};

const Register = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case AuthRegisterActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case AuthRegisterActionTypes.REGISTER_USER:
          return {
            ...state,
            loading: false,
            user: action.payload.data,
            registrationError: null,
            isUserRegistered: true,
          };
          case AuthRegisterActionTypes.LOGIN:
            return {
              ...state,
              loading: false,
              user: action.payload.data,
              loggedUser:true,
              registrationError: null,
              isUserRegistered: true,
            };
          case AuthRegisterActionTypes.LOGGED_USER:
            return {
              ...state,
            };
          case AuthRegisterActionTypes.LINKEDIN_AUTH:
            return {
              ...state,
              linkedinCode: action.payload.data,
            };
          case AuthRegisterActionTypes.SIGN_UP:
            return {
              ...state,
            };
          case AuthRegisterActionTypes.GOOGLE_AUTH:
            return {
              ...state,
               user: null,
            };
          case AuthRegisterActionTypes.LINKEDIN_AUTH:
            return {
              ...state,
              user: null,
            };

        default:
          return { ...state };
      }

    case AuthRegisterActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case AuthRegisterActionTypes.REGISTER_USER:
          return {
            ...state,
            loading: false,
            registrationError: action.payload.error,
            isUserRegistered: false,
          };
          case AuthRegisterActionTypes.LOGIN:
            return {
              ...state,
              loading: false,
              login: action.payload.error,
              isUserRegistered: false,
            };
            case AuthRegisterActionTypes.LINKEDIN_AUTH:
              return {
                ...state,
                linkedinCodeError: action.payload.error,
              };
            case AuthRegisterActionTypes.SIGN_UP:
              return {
                ...state,
                signUpError: action.payload.error,
              };
            case AuthRegisterActionTypes.GOOGLE_AUTH:
              return {
                ...state,
                googleSignUpError: action.payload.error,
              };
            case AuthRegisterActionTypes.LINKEDIN_AUTH:
              return {
                ...state,
                linkedinSignUpError: action.payload.error,
              };
            case AuthRegisterActionTypes.LOGIN:
              return {
                ...state,
                loginError: action.payload.error,
              };
        default:
          return { ...state };
      }

    case AuthRegisterActionTypes.REGISTER_USER: {
      return {
        ...state,
        loading: true,
        isUserRegistered: false,
      };
    }


    case AuthRegisterActionTypes.SIGN_UP_DATA:
      return {
        ...state,
        signUpData: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default Register;
