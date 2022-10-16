import { ChangeEvent, FormEvent, useState } from "react";
import { useValidations } from "../";

export interface FormProps {
  name: string;
  email: string;
}

const useForm = () => {
  const [formValues, setFormValues] = useState<FormProps>({
    name: "",
    email: "",
  });

  const { validations, formErrors } = useValidations({ formValues });

  const form = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      validations.applyValidations();
      form.utils.isSubmitted();
    },
    utils: {
      isSubmitted: () => {
        if (validations.isValid()) {
          console.log("submitted");
        }
      },
    },
  };

  const inputs = {
    handleChangeName: (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((oldState) => ({ ...oldState, name: event.target.value }));
    },
    handleChangeEmail: (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((oldState) => ({ ...oldState, email: event.target.value }));
    },
  };

  return {
    form,
    inputs,
    formValues,
    formErrors,
  };
};

export { useForm };
