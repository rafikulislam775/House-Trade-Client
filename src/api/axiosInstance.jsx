import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
export default axiosPublic;
