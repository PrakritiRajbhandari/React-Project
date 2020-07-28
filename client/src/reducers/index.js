import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import basketReducer from './basketReducer';
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  basketState: basketReducer
});
