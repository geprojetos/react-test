import { useEffect, useState } from "react";
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
        setFormErrors((oldState) => ({
          ...oldState,
          name: "Name is required",
        }));
        return;
      }

      setFormErrors((oldState) => ({
        ...oldState,
        name: "",
      }));
    },
    isInvalidEmail: () => {
      if (!formValues.email) {
        setFormErrors((oldState) => ({
          ...oldState,
          email: "Email is required",
        }));
        return;
      }

      setFormErrors((oldState) => ({
        ...oldState,
        email: "",
      }));
    },
  };

  return {
    validations,
    formErrors,
  };
};

export { useValidations };
