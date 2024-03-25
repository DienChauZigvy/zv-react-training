import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { authApi } from ".";

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
  async (error: AxiosError<any>) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401) {
      try {
        // const { data } = await axiosInstance.post<{ accessToken: string }>('/refreshToken', { refreshToken });
        const tokens = await authApi.refreshToken();
        console.log({ tokens });
        localStorage.setItem("accessToken", tokens.accessToken);
        originalRequest!.headers.Authorization = `Bearer ${tokens.accessToken}`;
        return axiosClient(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token", refreshError);
        // redirect to login
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
