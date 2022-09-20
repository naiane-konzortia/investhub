import { AuthRegisterActionTypes, AuthRegisterState } from "./types";

export const INIT_STATE: AuthRegisterState = {
  registrationError: null,
  message: "",
  loading: false,
  user: null,
  isUserRegistered: false,
  loggedUser:null,
  linkedinCode:null
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
              registrationError: null,
              isUserRegistered: true,
            };
          case AuthRegisterActionTypes.LOGGED_USER:
            return {
              ...state,
              loggedUser: action.payload.data,
            };
          case AuthRegisterActionTypes.LINKEDIN_AUTH:
            return {
              ...state,
              linkedinCode: action.payload.data,
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
    case AuthRegisterActionTypes.LOGIN: {
      return {
        ...state,
        loading: true,
        isUserRegistered: false,
        user: action.payload.data,
      };
    }
    case AuthRegisterActionTypes.LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default Register;
