import { ChangeEvent, FormEvent, useState } from "react";

interface FormGitHubProps {
  userName: string;
}

const useGitHub = (apiGitHub: any) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [formValues, setFormValues] = useState<FormGitHubProps>({
    userName: "",
  });

  const api = {
    getUsers: (userName: string) => {
      apiGitHub(state.setUserInfo, userName);
    },
  };

  const form = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      api.getUsers(formValues.userName);
    },
  };

  const inputs = {
    handleChangeUserName: (event: ChangeEvent<HTMLInputElement>) => {
      state.setFormValues((oldState) =>
        inputs.utils.updateName(oldState, event)
      );
    },
    utils: {
      updateName: (
        oldState: FormGitHubProps,
        event: ChangeEvent<HTMLInputElement>
      ) => {
        return {
          ...oldState,
          userName: event.target.value,
        };
      },
    },
  };

  const state = {
    setUserInfo: (fn: React.Dispatch<any>) => {
      setUserInfo(fn);
    },
    setFormValues: (fn: React.SetStateAction<FormGitHubProps>) => {
      setFormValues(fn);
    },
  };

  return {
    api,
    userInfo,
    form,
    inputs,
    formValues,
  };
};

export { useGitHub };
