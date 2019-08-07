import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import news from "./news";

export default combineReducers({
  alert,
  auth,
  news
});
