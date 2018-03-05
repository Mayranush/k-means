import axios from "axios";
import store from "store";
let api;


if (window && !window.api) {
  window.api = api;
}

let addHeaders = (token) => {
  const tokenFromStore = "Token " + (store.getState().general.token || window.sessionStorage.getItem("token"));

  if (token) {
    api = axios.create({
      baseURL: "http://104.237.3.213:8888",
      headers: {"Authorization": tokenFromStore}
    });
  } else {
    api = axios.create({
      baseURL: "http://104.237.3.213:8888"
    });
  }

  return api;
};

const signIn = (obj) => {
  addHeaders(false);
  return api.post("/api/sign-in", obj);
};


export default {
  signIn
};

