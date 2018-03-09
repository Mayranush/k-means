import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {changePopup} from "./popupActions";
import {push} from "react-router-redux";


export const cleanData = createAction(ActionTypes.cleanData);


export const changeText = createAction(ActionTypes.changeText);
export const changeStopWords = createAction(ActionTypes.changeStopWords);
export const changeLemmatize = createAction(ActionTypes.changeLemmatize);
export const changeClusterCount = createAction(ActionTypes.changeClusterCount);

////////////////////////////////////////post cluster//////////////

export const getDataRequestCluster = createAction(ActionTypes.getDataRequestCluster);
 const getDataResponseCluster1 = createAction(ActionTypes.getDataResponseCluster);

export function getDataResponseCluster(data) {
  return (dispatch) => {
    store.dispatch(push('/clustered'));

    return dispatch(getDataResponseCluster1(data));
  };
}
export const getDataResponseErrorCluster = createAction(ActionTypes.getDataResponseErrorCluster);


export function cluster(obj) {
  return (dispatch) => {
    dispatch(getDataRequestCluster());
    return api.cluster(obj)
      .then(data => dispatch(getDataResponseCluster(data.data)))
      .catch(error => dispatch(getDataResponseErrorCluster(error)));
  };
}

