import { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
  name: string;
  email: string;
}

const useForm = () => {
  const [formValues, setFormValues] = useState<FormProps>({
    name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<FormProps>({
    name: "",
    email: "",
  });

  const form = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      validations.applyValidations();
      if (validations.isInvalid()) return;
      console.log("Submitted");
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

  const validations = {
    isInvalid: () => {
      return formErrors.name.length || formErrors.name.length;
    },
    applyValidations: () => {
      validations.isInvalidName();
      validations.isInvalidEmail();
    },
    isInvalidName: () => {
      if (!formValues.name) {
        setFormErrors((oldState) => ({
          ...oldState,
          name: "Name is required",
        }));
      }
    },
    isInvalidEmail: () => {
      if (!formValues.email) {
        setFormErrors((oldState) => ({
          ...oldState,
          email: "Email is required",
        }));
      }
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
