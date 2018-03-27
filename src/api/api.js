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
      baseURL:  "http://46.101.42.31:8081",//"http://46.101.42.31:8081",//
      headers: {"Authorization": tokenFromStore}
    });
  } else {
    api = axios.create({
      baseURL: "http://46.101.42.31:8081"
    });
  }

  return api;
};

const cluster = (obj) => {
  addHeaders(false);
  return api.post("/api/cluster", obj);
};
const exportToExcel = () => {
  addHeaders(false);
  return api.get("/api/export");
};


export default {
  cluster,
  exportToExcel
};

