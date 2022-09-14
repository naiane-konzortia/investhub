export enum PagesActionTypes {
    SET_ACTIVE_PAGE = "@@pages/SET_ACTIVE_PAGE",
    SET_ACTIVE_TIMELINE_STEP = "@@pages/SET_ACTIVE_TIMELINE_STEP",
    SET_ACTIVE_SUBSTEP = "@@pages/SET_ACTIVE_SUBSTEP",
    SET_ACTIVE_STATE = "@@pages/SET_ACTIVE_STATE",
    SET_ACTIVE_SIGNUP_TIMELINE_STEP = "@@pages/SET_ACTIVE_SIGNUP_TIMELINE_STEP",
    SET_INVESTOR_TYPE = "@@pages/SET_INVESTOR_TYPE",
    SIGN_UP_DATA = "@@pages/SIGN_UP_DATA"
  }
  
  

  export type IData = {
    name: string | null,
    email:string | null,
    password:string | null,
  }


  export interface PagesState {
    activePage: "company_details" | "company_securities" | "directors_officers" | "securities_holders" | "legal_documents" | "banking";
    isActivePageSet: boolean;
    activeTimelineStep: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    activeSubStep: boolean;
    activeState: "landing_page" | "sign_up";
    activeSignUpTimeline: "create_user" | "more_info" | "raise_info" | "finish_page";
    investorType: "invest" | "raise" | null;
    signUpData: IData | null;
    nameUser:string | null;
  }
  