import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    data: []
}


export default handleActions({

  [ActionTypes.getDataResponseCluster]: (state, {payload}) => {
    return ({...state, data: payload});
  },


}, defaultState);
