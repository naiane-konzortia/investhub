import { PagesActionTypes } from "./types";



export const setActivePage = (activePage: "company_details" | "company_securities" | "directors_officers" | "securities_holders" | "legal_documents" | "banking") => {
  return {
    type: PagesActionTypes.SET_ACTIVE_PAGE,
    payload: { activePage },
  };
};


export const setActiveTimelineStep = (activeStep: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) => {
  return {
    type: PagesActionTypes.SET_ACTIVE_TIMELINE_STEP,
    payload: { activeStep },
  };
};

export const setActiveSubstep = (activeSubStep: boolean) => {
  return {
    type: PagesActionTypes.SET_ACTIVE_SUBSTEP,
    payload: { activeSubStep },
  };
};

export const setActiveState = (activeState: "landing_page" | "sign_up" | "sign_in") => {
  return {
    type: PagesActionTypes.SET_ACTIVE_STATE,
    payload: { activeState },
  };
};

export const setActiveSignUpTimeline = (activeSignUpTimeline: "create_user" | "more_info" | "raise_info" | "finish_page") => {
  return {
    type: PagesActionTypes.SET_ACTIVE_SIGNUP_TIMELINE_STEP,
    payload: { activeSignUpTimeline },
  };
};

export const setInvestorType = (investorType: "invest" | "raise" ) => {
  return {
    type: PagesActionTypes.SET_INVESTOR_TYPE,
    payload: { investorType },
  };
};

export const setSignUpData = (signUpData:{} ) => {
  return {
    type: PagesActionTypes.SIGN_UP_DATA,
    payload: { signUpData },
  };
};

