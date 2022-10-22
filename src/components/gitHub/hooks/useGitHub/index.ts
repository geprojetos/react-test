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
    getUsers: async (userName: string) => {
      try {
        const response = await apiGitHub(userName);
        if (response?.userInfo?.id) {
          state.setUserInfo(response?.userInfo);
          return;
        }
        state.setUserInfo(() => {});
      } catch (error) {
        console.error(error);
      }
    },
  };

  const form = {
    handleSubmit: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await api.getUsers(formValues.userName);
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
