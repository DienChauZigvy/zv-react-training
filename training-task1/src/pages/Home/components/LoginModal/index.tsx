import styles from "./LoginModal.module.scss";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { countries } from "../../../../data/countryCode";
import { useState } from "react";
import Button from "../../../../components/Button";
import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginModalProps {
  onClose: () => void;
}

export interface CountryProps {
  countryName: string;
  countryCode: string;
  isoCode: string;
}

interface IFormInput {
  countryName: string;
  phoneNumber: number;
}
export default function LoginModal({ onClose }: LoginModalProps) {
  const [showCountryCode, setShowCountryCode] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+84");

  const validationSchema = yup.object({
    countryName: yup.string().required("Country name is required"),
    phoneNumber: yup.number().required("Phone number is required"),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      countryName: "Vietnam +84",
      phoneNumber: undefined,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleFocus = () => {
    setShowCountryCode(true);
  };

  const handleBlur = () => {
    setShowCountryCode(false);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode =
      countries.find((country) => country.isoCode === event.target.value)
        ?.countryCode || "";
    setSelectedCountryCode(countryCode);
    setValue("countryName", event.target.value);
  };

  const GoogleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      role="presentation"
      focusable="false"
      style={{ display: "block", height: "20px", width: "20px" }}
    >
      <path
        fill="#4285f4"
        d="M24.12 25c2.82-2.63 4.07-7 3.32-11.19H16.25v4.63h6.37A5.26 5.26 0 0 1 20.25 22z"
      ></path>
      <path
        fill="#34a853"
        d="M5.62 21.31A12 12 0 0 0 24.12 25l-3.87-3a7.16 7.16 0 0 1-10.69-3.75z"
      ></path>
      <path
        fill="#fbbc02"
        d="M9.56 18.25c-.5-1.56-.5-3 0-4.56l-3.94-3.07a12.08 12.08 0 0 0 0 10.7z"
      ></path>
      <path
        fill="#ea4335"
        d="M9.56 13.69c1.38-4.32 7.25-6.82 11.19-3.13l3.44-3.37a11.8 11.8 0 0 0-18.57 3.43l3.94 3.07z"
      ></path>
    </svg>
  );
  return createPortal(
    <Modal onClose={onClose} title="Log in or sign up">
      <div className={styles.titleHeader}>Welcome to Airbnb</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formInput}>
        <div className={styles.topInput}>
          <div className={styles.selectInput}>
            <label htmlFor="countrySelect">Country code</label>
            <select
              id="countrySelect"
              {...register("countryName")}
              onChange={handleSelectChange}
            >
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.countryName} ({country.countryCode})
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputContainer}>
            {showCountryCode && selectedCountryCode && (
              <span>{selectedCountryCode}</span>
            )}
            <input
              {...register("phoneNumber")}
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label>Phone number</label>
          </div>
          <span className={styles.error}>{errors.phoneNumber?.message}</span>
        </div>

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
        el={GoogleIcon}
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
    </Modal>,
    document.body,
  );
}
