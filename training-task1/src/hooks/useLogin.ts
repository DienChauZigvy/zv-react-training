import { MutationOptions, useMutation } from "@tanstack/react-query";
import { LoginPayload, LoginResponse } from "../types";
import { AxiosError } from "axios";
import { useToast } from "../components/Toast/ToastContext";

type UseLoginMutationOptions = Omit<
  MutationOptions<LoginResponse, Error, LoginPayload>,
  "mutationKey" | "mutationFn"
>;

export const useLogin = (options: UseLoginMutationOptions) => {
  const toast = useToast();
  const { mutateAsync } = useMutation(options);

  const login = async (data: LoginPayload, onSuccess: () => void) => {
    try {
      const response = await mutateAsync(data, {
        ...options,
        onSuccess: () => {
          onSuccess();
        },
      });

      if (response) {
        localStorage.setItem("access_token", response.accessToken);
        localStorage.setItem("refresh_token", response.refreshToken);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        let message = error.response?.data.message || "Server Unavailable";
        let code = error.response?.status || 503;
        toast?.error(`${code}: ${message}`);
      } else if (error instanceof Error) {
        let message = error.message;
        toast?.error(`${message}`);
      }
    }
  };

  return { login };
};
