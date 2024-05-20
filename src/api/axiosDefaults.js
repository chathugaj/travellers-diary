import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL

export const axiosReq = axios.create();
export const axiosRes = axios.create();