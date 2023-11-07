import { combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./infoData";

export default combineReducers({
  info: infoReducer,
});
