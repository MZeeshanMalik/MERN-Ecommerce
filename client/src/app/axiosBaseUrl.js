import axios from "axios";

// Server URL
const axiosBaseUrl = axios.create({ baseURL: "/api" });

export default axiosBaseUrl;
