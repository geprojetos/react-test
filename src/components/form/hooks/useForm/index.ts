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
      state.setFormValues((oldState) =>
        inputs.utils.updateName(oldState, event)
      );
    },
    handleChangeEmail: (event: ChangeEvent<HTMLInputElement>) => {
      state.setFormValues((oldState) =>
        inputs.utils.updateEmail(oldState, event)
      );
    },
    utils: {
      updateName: (
        oldState: FormProps,
        event: ChangeEvent<HTMLInputElement>
      ) => {
        return { ...oldState, name: event.target.value };
      },
      updateEmail: (
        oldState: FormProps,
        event: ChangeEvent<HTMLInputElement>
      ) => {
        return { ...oldState, email: event.target.value };
      },
    },
  };

  const state = {
    setFormValues: (fn: React.SetStateAction<FormProps>) => {
      setFormValues(fn);
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
