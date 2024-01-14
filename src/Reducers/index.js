import { combineReducers } from "redux";
import IncrementReducer from "./IncrementReducer";

const rootRedux = combineReducers({
  IncrementReducer,
});

export default rootRedux;
