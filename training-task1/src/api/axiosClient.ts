import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { LoginResponse } from "../types";

const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response?.data ?? response;
  },
  async (error) => {
    // const originalRequest = error.config;
    // console.log(22, error?.response?.status === 401);
    if (error?.response?.status === 401) {
      try {
        const url = "http://localhost:3000/auth/refresh";
        let refreshToken = localStorage.getItem("refresh_token");

        console.log(refreshToken);
        if (!refreshToken) {
          throw new Error("Cannot get refreshToken");
        }

        const headers = { Authorization: `Bearer ${refreshToken}` };
        console.log(111, headers);
        const data = await fetch(url, {
          method: "POST",
          headers,
        });

        const tokens: LoginResponse = await data.json();

        // const tokens = await authApi.refreshToken();
        // console.log(await tokens.json());

        if (tokens) {
          localStorage.setItem("access_token", tokens.accessToken);
          localStorage.setItem("refresh_token", tokens.refreshToken);
        }

        // originalRequest!.headers.Authorization = `Bearer ${tokens.accessToken}`;
        // return axiosClient(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token", refreshError);
        // redirect to login
        // localStorage.removeItem("access_token");
        // localStorage.removeItem("refresh_token");

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
