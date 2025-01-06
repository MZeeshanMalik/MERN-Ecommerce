import axios from "axios";

// Server URL
const axiosBaseUrl = axios.create({ baseURL: "http://4.200.25.234/api" });

export default axiosBaseUrl;
