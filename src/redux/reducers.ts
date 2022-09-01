import { combineReducers } from "redux";

import Register from "./auth/register/reducer";
import Pages from "./pages/reducer"

export default combineReducers({
 
  Register,
  Pages
 
});
