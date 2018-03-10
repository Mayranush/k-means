import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import api from "../api/api";
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
    let newData = [];
    let len = 0;
    let itemIndex = 0;
    let clusters = [];
    data.map((item, i) => {
      if (item.sentences.length > len) {
        len = item.sentences.length;
        itemIndex = i;
      }
      clusters.push(item.sentences.length);
    });
    data[itemIndex].sentences.map((obj, j) => {
      let newObj = new Object();
      data.map((item, i) => {
        let sentence = "sentence" + i;
        let words = "words" + i;
        let vector = "vector" + i;
        if (item.sentences[j]) {
          newObj[sentence] = item.sentences[j].sentence;
          newObj[words] = item.sentences[j].words;
          newObj[vector] = item.sentences[j].vector;
        }
      });
      newData.push(newObj);
    });
    return dispatch(getDataResponseCluster1({newData, clusters}));
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

