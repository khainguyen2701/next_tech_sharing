import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      //   call API login với token mới
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
