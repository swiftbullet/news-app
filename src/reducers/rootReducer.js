import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";

export default combineReducers({
  articles: articleReducer,
  user: userReducer,
});
