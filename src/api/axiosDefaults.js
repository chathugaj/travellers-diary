import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.withCredentials = true;
axios.defaults.headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

export const axiosReq = axios.create();
export const axiosRes = axios.create();