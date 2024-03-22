import axiosClient from "./axiosClient";
import { Login } from "../types/auth";

const authApi = {
  login(data: Login) {
    const url = "/auth/login";

    return axiosClient.post(url, data);
  },
};

export default authApi;
