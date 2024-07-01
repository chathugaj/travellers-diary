import axios from "axios";
import { getCookie } from "../helpers/commonHelper";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export const addCsrfTokenHeaders = async (config) => {
  config.headers = Object.assign({}, config?.headers, {
    "X-CSRF-TOKEN": getCookie("csrftoken"),
    "X-CSRFToken": getCookie("csrftoken"),
  }); // Merge with existing headers
  return config;
};

// axios.interceptors.request.use(addCsrfTokenHeaders);

export const axiosReq = axios.create();
export const axiosRes = axios.create();

export default axios;
