import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import styles from "./InputField.module.scss";
import cx from "classnames";

export type InputProps<T extends FieldValues> = UseControllerProps<T> & {
  id?: string;
  name?: string;
  label?: string;
  className?: string;
  type?: "text" | "password";
  placeholder?: string;
};

export default function Input<T extends FieldValues>(props: InputProps<T>) {
  const { field } = useController(props);

  return (
    <div className={styles.inputContainer}>
      {props.label && <span>{props.label}:</span>}
      <input
        {...field}
        placeholder={props.placeholder}
        type={props.type || "text"}
        className={cx(styles.input, props.className)}
      />
    </div>
  );
}
