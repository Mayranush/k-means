const ActionTypes = {
	cleanData: "CLEAN_DATA",
	changePopup: "CHANGE_POPUP",

	changeText: "CHANGE_TEXT",
	changeStopWords: "CHANGE_STOP_WORDS",
	changeLemmatize: "CHANGE_LEMMATIZE",
  changeKMeans: "CHANGE_KMEANS",
	changeClusterCount: "CHANGE_CLUSTER_COUNT",
  changeSimCoefficient: "CHANGE_SIM_COEFFICENT",

	getDataRequestCluster: "GET_DATA_REQUEST_CLUSTER",
	getDataResponseCluster: "GET_DATA_RESPONSE_CLUSTER",
	getDataResponseErrorCluster: "GET_DATA_RESPONSE_ERROR_CLUSTER",

	getDataRequestChangePassword: "GET_DATA_REQUEST_CHANGE_PASSWORD",
    getDataResponseChangePassword: "GET_DATA_RESPONSE_CHANGE_PASSWORD",
    getDataResponseErrorChangePassword: "GET_DATA_RESPONSE_ERROR_CHANGE_PASSWORD"
};

export default ActionTypes;