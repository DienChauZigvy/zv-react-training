import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../ControllerInput";

export type RegistrationFormFields = {
  firstName: string;
};

export const RegistrationForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormFields> = (data) => {
    // console.log("submitting...", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        control={control}
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
