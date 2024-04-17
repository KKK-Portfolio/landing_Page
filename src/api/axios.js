import axios from "axios";

const BASE_URL = "https://kkk.otastechsolutions.com/";
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.withCredentials = true;

export default axios;
