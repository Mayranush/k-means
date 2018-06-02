import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import api from "../api/api";
import {push} from "react-router-redux";


export const cleanData = createAction(ActionTypes.cleanData);


export const changeText = createAction(ActionTypes.changeText);
export const changeStopWords = createAction(ActionTypes.changeStopWords);
export const changeLemmatize = createAction(ActionTypes.changeLemmatize);
export const changeKMeans = createAction(ActionTypes.changeKMeans);
export const changeClusterCount = createAction(ActionTypes.changeClusterCount);
export const changeSimCoefficient = createAction(ActionTypes.changeSimCoefficient);

////////////////////////////////////////post cluster//////////////

const getDataRequestClusterFunc = createAction(ActionTypes.getDataRequestCluster);
export function getDataRequestCluster() {
  return (dispatch) => {
    let loader = true;

    return dispatch(getDataRequestClusterFunc(loader));
  };
}

const getDataResponseCluster1 = createAction(ActionTypes.getDataResponseCluster);

export function getDataResponseCluster(data) {
  return (dispatch) => {
    let loader = false;
    store.dispatch(push('/clustered'));
    let down_url = data.down_url;
    let newData = [];
    let len = 0;
    let itemIndex = 0;
    let clusters = [];
    data.data.map((item, i) => {
      if (item.sentences.length > len) {
        len = item.sentences.length;
        itemIndex = i;
      }
      clusters.push(item.sentences.length);
    });
    data.data[itemIndex].sentences.map((obj, j) => {
      let newObj = new Object();

      data.data.map((item, i) => {
        let cluster = "cluster" + i;
        let sentenceLemmatized = "sentenceLemmatized" + i;
        let words = "words" + i;
        let vector = "vector" + i;
        if (item.sentences[j]) {
          newObj[cluster] = item.sentences[j].sentence;
          newObj[sentenceLemmatized] = item.sentences[j].sentenceLemmatized;
          newObj[words] = item.sentences[j].words;
          newObj[vector] = item.sentences[j].vector;
        } else {
          newObj[cluster] = "";
          newObj[sentenceLemmatized] = "";
          newObj[words] = "";
          newObj[vector] = "";
        }
      });
      newData.push(newObj);
    });
    return dispatch(getDataResponseCluster1({newData, clusters, down_url, loader}));
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

////////////////////////////////////////get export//////////////

// const exportToExcel1 = (data) => {
//   window.open(data.down_url);
// };
//
// export function exportToExcel(obj) {
//   return (dispatch) => {
//     return api.exportToExcel()
//       .then(data => exportToExcel1(data.data));
//   };
// }

