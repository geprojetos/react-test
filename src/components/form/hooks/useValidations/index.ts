import { SetStateAction, useEffect, useState } from "react";
import { FormProps } from "../useForm";

interface useValidationsProps {
  formValues: FormProps;
}

const useValidations = ({ formValues }: useValidationsProps) => {
  const [formErrors, setFormErrors] = useState<FormProps>({
    name: "",
    email: "",
  });

  useEffect(() => {
    validations.isValid();
  }, [formErrors]);

  const validations = {
    isValid: () => {
      if (formErrors.name.length || formErrors.email.length) {
        return false;
      }
      return true;
    },
    applyValidations: async () => {
      validations.isInvalidName();
      validations.isInvalidEmail();
    },
    isInvalidName: () => {
      if (!formValues.name) {
        state.setFormErrors(validations.utils.nameIsRequired);
        return;
      }
      state.setFormErrors(validations.utils.nameIsValid);
    },
    isInvalidEmail: () => {
      if (!formValues.email) {
        state.setFormErrors(validations.utils.emailIsRequired);
        return;
      }
      state.setFormErrors(validations.utils.emailIsValid);
    },
    utils: {
      nameIsRequired: (oldState: FormProps) => {
        return {
          ...oldState,
          name: "Name is required",
        };
      },
      nameIsValid: (oldState: FormProps) => {
        return {
          ...oldState,
          name: "",
        };
      },
      emailIsRequired: (oldState: FormProps) => {
        return {
          ...oldState,
          email: "Email is required",
        };
      },
      emailIsValid: (oldState: FormProps) => {
        return {
          ...oldState,
          email: "",
        };
      },
    },
  };

  const state = {
    setFormErrors: (fn: SetStateAction<FormProps>) => {
      setFormErrors(fn);
    },
  };

  return {
    validations,
    formErrors,
  };
};

export { useValidations };
