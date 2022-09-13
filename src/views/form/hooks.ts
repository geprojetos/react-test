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
      validations.isValid();
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
    isValid: () => {
      if (formValues.name.length > 0 && formValues.email.length > 0) {
        console.log("Submitted");
      }
    },
    applyValidations: () => {
      validations.isInvalidName();
      validations.isInvalidEmail();
      validations.isValidName();
      validations.isValidEmail();
    },
    isInvalidName: () => {
      if (!formValues.name) {
        setFormErrors((oldState) => ({
          ...oldState,
          name: "Name is required",
        }));
      }
    },
    isValidName: () => {
      if (formValues.name) {
        setFormErrors((oldState) => ({
          ...oldState,
          name: "",
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
    isValidEmail: () => {
      if (formValues.email) {
        setFormErrors((oldState) => ({
          ...oldState,
          email: "",
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
