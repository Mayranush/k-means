import axios from "axios";
import store from 'store';
let api;


if (window && !window.api) {
  window.api = api;
}

let addHeaders= (token) => {
    const tokenFromStore = "Token " + (store.getState().projectDataReducer.data.user.token  || window.sessionStorage.getItem("token"));
    
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

const signUp = (obj) => {
    addHeaders(false);
    return api.post("/api/sign-up", obj);
};

const passwordForget = (obj) => {
  addHeaders(false);
  return api.post("/api/forget", obj);
};

const myDetails = () => {
    addHeaders(true);
    return api.get("/auth/settings");
};

const twitterSettings = () => {
    addHeaders(true);
    return api.get("/auth/tw-api-details");
}

const twitterCriteria = () => {
    addHeaders(true);
    return api.get("/auth/tw-tip-criteria");
}

const myDetailsUpdate = (obj) => {
    addHeaders(true);
    return api.post("/auth/settings", obj);
}

const twitterSettingsUpdate = (obj) => {
    addHeaders(true);
    return api.post("/auth/tw-api-details", obj);
}

const twitterCriteriaUpdate = (obj) => {
    addHeaders(true);
    return api.post("/auth/tw-tip-criteria", obj);
}

const botGet = () => {
    addHeaders(true);
    return api.get("/auth/bot");
}

const botPost = () => {
    addHeaders(true);
    return api.post("/auth/bot");
}

const botPut = () => {
    addHeaders(true);
    return api.put("/auth/bot");
}

const twTipLogs = () => {
    addHeaders(true);
    return api.get("/auth/tw-tip-logs");
}

export default { signIn, signUp, passwordForget, myDetails, twitterSettings, twitterCriteria, myDetailsUpdate,  twitterSettingsUpdate, twitterCriteriaUpdate, botGet, botPost, botPut, twTipLogs };