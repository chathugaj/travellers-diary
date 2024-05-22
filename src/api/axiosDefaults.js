import axios from "axios";
import {getCookie} from "../helpers/commonHelper";

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-CSRF-TOKEN"] = getCookie("csrftoken");
axios.defaults.headers.common["X-CSRFToken"] = getCookie("csrftoken");
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();