import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../ControllerInput";

export type RegistrationFormFields = {
  firstName: string;
};

export const RegistrationForm: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormFields> = (data) => {
    console.log("submitting...", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        control={control}
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        className=""
      />
      <button
        className="mt-4 transform duration-200 py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 focus:outline-none disabled:opacity-50 focus:translate-y-1 hover:-translate-y-1"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
