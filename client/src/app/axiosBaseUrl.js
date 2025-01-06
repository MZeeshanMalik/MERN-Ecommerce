import axios from "axios";

// Server URL
const axiosBaseUrl = axios.create({ baseURL: "https://13.233.151.147/api" });

export default axiosBaseUrl;
