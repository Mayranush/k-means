import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  data: [],
  clusters: [],
  down_url: '',
  loader: false
};


export default handleActions({

  [ActionTypes.getDataResponseCluster]: (state, {payload}) => {
    return ({...state, data: payload.newData, clusters: payload.clusters, down_url: payload.down_url, loader: payload.loader});
  },
  [ActionTypes.getDataRequestCluster]: (state, {payload}) => {
    return ({...state, loader: payload});
  },

}, defaultState);
