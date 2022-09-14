import { PagesActionTypes, PagesState } from "./types";

export const INIT_STATE: PagesState = {
  isActivePageSet: false,
  activePage:"company_details",
  activeTimelineStep: 1,
  activeSubStep: false,
  activeState:"landing_page",
  activeSignUpTimeline: "create_user",
  investorType: null,
  signUpData: null,
  nameUser:null
};

const Pages = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case PagesActionTypes.SET_ACTIVE_PAGE: {
      console.log(action.payload)
      return {
        ...state,
        isActivePageSet: true,
        activePage:action.payload.activePage
      };
    }
    case PagesActionTypes.SET_ACTIVE_TIMELINE_STEP: {
      return {
        ...state,
        activeTimelineStep:action.payload.activeStep
      };
    }
    case PagesActionTypes.SET_ACTIVE_SUBSTEP: {
      return {
        ...state,
        activeSubStep:action.payload.activeSubStep
      };
    }
    case PagesActionTypes.SET_ACTIVE_STATE: {
      return {
        ...state,
        activeState:action.payload.activeState
      };
    }
    case PagesActionTypes.SET_ACTIVE_SIGNUP_TIMELINE_STEP: {
      return {
        ...state,
        activeSignUpTimeline:action.payload.activeSignUpTimeline
      };
    }
    case PagesActionTypes.SET_INVESTOR_TYPE: {
      return {
        ...state,
        investorType:action.payload.investorType
      };
    }
    case PagesActionTypes.SIGN_UP_DATA: {
      console.log(action.payload)
      return {
        ...state,
        investorType:action.payload.signUpData,
        nameUser: action.payload.signUpData.name
      };
    }
    default:
      return { ...state };
  }
};

export default Pages;
