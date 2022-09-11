import { ChangeEvent, FormEvent, useState } from "react";

interface FormGitHubProps {
  userName: string;
}

const useGitHub = (apiGitHub: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [formValues, setFormValues] = useState<FormGitHubProps>({
    userName: ""
  });

  const api = {
    getUsers: (userName: string) => {
      apiGitHub(setUserInfo, userName);
    }
  };

  const form = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      api.getUsers(formValues.userName);
    }
  };

  const inputs = {
    handleChangeUserName: (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((oldState) => ({
        ...oldState,
        userName: event.target.value
      }));
    }
  };

  return {
    api,
    userInfo,
    form,
    inputs,
    formValues
  };
};

export { useGitHub };
