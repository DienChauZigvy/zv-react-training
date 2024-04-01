import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaApple, FaFacebookSquare } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import * as yup from "yup";
import { authApi } from "../../../../api/authAPI";
import Button from "../../../../components/Button";
import FormInput from "../../../../components/ControllerInput";
import Modal from "../../../../components/Modal";
import { useToast } from "../../../../components/Toast/ToastContext";
import { useProfile } from "../../../../hooks/useProfile";
import { LoginPayload } from "../../../../redux/auth/authSlice";
import styles from "./LoginModal.module.scss";
import GoogleIcon from "./GoogeIcon";

interface LoginModalProps {
  onClose: () => void;
}

export interface CountryProps {
  countryName: string;
  countryCode: string;
  isoCode: string;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const toast = useToast();
  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const { mutateAsync, isSuccess } = useMutation({
    mutationFn: (body: LoginPayload) => {
      return authApi.login(body);
    },
    mutationKey: ["login"],
  });
  // console.log("isSuccess", isSuccess);
  const { data: profile, isSuccess: isProfileSuccess } = useProfile({
    enabled: isSuccess,
  });
  // console.log(11, profile);
  // console.log({ isSuccess });

  useEffect(() => {
    if (isSuccess && isProfileSuccess) {
      onClose();
    }
  }, [isSuccess, isProfileSuccess]);

  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    try {
      const response = await mutateAsync(data, {
        onSuccess: () => {
          toast?.success(`${data.email} login sucess`);
          reset();
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

  return (
    <Modal onClose={onClose} title="Log in or sign up">
      <div className={styles.titleHeader}>Welcome to Airbnb</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formInput}>
        <FormInput
          control={control}
          type="email"
          name="email"
          label="User name"
          placeholder="email"
        />
        <span className={styles.errorMessage}>{errors.email?.message}</span>
        <FormInput
          control={control}
          type="password"
          name="password"
          label="Password"
          placeholder="password"
        />
        <span className={styles.errorMessage}>{errors.password?.message}</span>

        <p className={styles.confirmText}>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. <span>Privacy Policy</span>
        </p>

        <Button title="Continue" className="btnContinue" />
      </form>

      <div className={styles.divider}>
        <div className={styles.dividerItem}></div>
        <span>or</span>
        <div className={styles.dividerItem}></div>
      </div>

      <Button
        className="btnSignIn btnFacebook"
        title="Continue with Facebook"
        icon={FaFacebookSquare}
      />
      <Button
        className="btnSignIn"
        title="Continue with Google"
        el={<GoogleIcon />}
      />
      <Button
        className="btnSignIn"
        title="Continue with Apple"
        icon={FaApple}
      />
      <Button
        className="btnSignIn"
        title="Continue with Email"
        icon={MdMailOutline}
      />
    </Modal>
  );
}
