import { FC, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
  useForm,
} from "react-hook-form";

export type InputProps<T extends FieldValues> = UseControllerProps<T> & {
  id?: string;
  name?: string;
  label?: string;

  className?: string;
};

export default function Input<T extends FieldValues>(props: InputProps<T>) {
  const { field } = useController(props);
  return (
    // <input
    //   id={id}
    //   ref={ref}
    //   name={name}
    //   type={type}
    //   aria-label={label}
    //   placeholder={placeholder}
    // />
    <input {...field} />
  );
}

// export type InputProps = {
//   name: string;
//   label?: string;
//   type?: string;
//   className?: string;
//   onChange?: () => void;
//   register?: any;
// };

// export default function Input({
//   register,
//   name,
//   type,
//   label,
//   ...inputProps
// }: InputProps) {
//   return (
//     <>
//       <label htmlFor={name}>{label}</label>
//       <input ref={register} name={name} type={type} {...inputProps} />
//     </>
//   );
// }
