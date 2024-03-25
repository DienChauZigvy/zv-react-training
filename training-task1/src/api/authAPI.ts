import axiosClient from "./axiosClient";
import { Login, LoginResponse } from "../types/auth";

export const authApi = {
  login(data: Login): Promise<LoginResponse> {
    const url = "/auth/login";

    return axiosClient.post(url, data);
  },
  refreshToken(): Promise<LoginResponse> {
    const url = "/auth/refresh";
    let refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      throw new Error("Cannot get refreshToken");
    }
    return axiosClient.post(url, {
      refreshToken,
    });
  },
};

// export default authApi;
