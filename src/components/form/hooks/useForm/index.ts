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

  const { validations } = useValidations({ formValues });

  const form = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => {
      form.utils.isSubmitted(event);
    },
    utils: {
      isSubmitted: async (event: FormEvent<HTMLFormElement>) => {
        await validations.applyValidations();
        if (validations.isValid()) {
          event.preventDefault();
          console.log("Submitted");
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
  };
};

export { useForm };
