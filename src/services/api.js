import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user") || "{}";
    if (user != null)
      config.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
