import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.withCredentials = true;

export default axios;
