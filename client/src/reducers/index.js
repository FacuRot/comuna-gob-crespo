import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import news from "./news";
import events from "./events";
import talleres from "./talleres";

export default combineReducers({
  alert,
  auth,
  news,
  events,
  talleres
});
