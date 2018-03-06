import {combineReducers} from "redux";

import general from "./generalReducer";
import popup from "./popupReducer";
import result from "./resultReducer";

const appReducer = combineReducers({
  general,
  popup,
  result
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAN_DATA') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;
