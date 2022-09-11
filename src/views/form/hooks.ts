import { ChangeEvent, FormEvent, useState } from "react";

interface FormPorps {
  name: string;
  email: string;
}

const useForm = () => {
  const [formValues, setFormValues] = useState<FormPorps>({
    name: "",
    email: ""
  });

  const form = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("submit", formValues);
    }
  };

  const inputs = {
    handleChangeName: (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((oldState) => ({ ...oldState, name: event.target.value }));
    },
    handleChangeEmail: (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((oldState) => ({ ...oldState, email: event.target.value }));
    }
  };

  return {
    form,
    inputs,
    formValues
  };
};

export { useForm };
