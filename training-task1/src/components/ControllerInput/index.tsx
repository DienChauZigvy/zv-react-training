import { Control, FieldValues, Path } from "react-hook-form";
import Input from "../FormControllers/InputField";

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  type?: "text" | "password";
  label?: string;
  placeholder?: string;
  className?: string;
};

export default function FormInput<TFormValues extends FieldValues>({
  className,
  ...props
}: FormInputProps<TFormValues>): JSX.Element {
  return (
    <div className={className}>
      <Input {...props} />
    </div>
  );
}
