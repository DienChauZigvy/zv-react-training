import { Control, FieldValues, Path, UseFormRegister } from "react-hook-form";
import Input from "../FormControllers/InputField";
// import { Input, InputProps } from "../FormControllers/InputField";

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  // register?: UseFormRegister<TFormValues>;
  control: Control<TFormValues>;
  type: string;
  label: string;
  placeholder: string;
  className: string;
};

export default function FormInput<TFormValues extends FieldValues>({
  className,
  ...props
}: FormInputProps<TFormValues>): JSX.Element {
  return (
    <div className={className} aria-live="polite">
      <Input {...props} />
    </div>
  );
}
