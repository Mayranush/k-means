import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  data: [],
  clusters: []

}


export default handleActions({

  [ActionTypes.getDataResponseCluster]: (state, {payload}) => {
    return ({...state, data: payload.newData, clusters: payload.clusters});
  },


}, defaultState);
