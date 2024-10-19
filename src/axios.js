import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://city-corporation-backend.vercel.app", 
});


axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true; 

      try {
        const response = await axios.post(
          "https://city-corporation-backend.vercel.app/auth/token/refresh/",
          { refresh: refreshToken }
        );
        const newAccessToken = response.data.access;


        localStorage.setItem("accessToken", newAccessToken);

     
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
