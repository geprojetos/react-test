import { FormProps } from "../components/form/hooks/useForm";

const mockEventName: any = {
  target: {
    value: "test name",
  },
};

const mockEventEmail: any = {
  target: {
    value: "test email",
  },
};

const mockSubmit: any = {
  preventDefault: () => null,
};

const mockGitHubApi = (userName: string) => {
  return { userInfo: { id: "123", login: "fake user name" } };
};

const mockSubmitDefaultUserName: any = {
  target: {
    value: "",
  },
};

const mockSubmitUserName: any = {
  target: {
    value: "test",
  },
};

const mockValidationsIsValid: FormProps = {
  name: "test",
  email: "email@email.com",
};

const mockValidationsIsInValidName: FormProps = {
  name: "",
  email: "email@email.com",
};

const mockValidationsIsInValidEmail: FormProps = {
  name: "name",
  email: "",
};

export {
  mockEventName,
  mockEventEmail,
  mockSubmit,
  mockGitHubApi,
  mockSubmitDefaultUserName,
  mockSubmitUserName,
  mockValidationsIsValid,
  mockValidationsIsInValidName,
  mockValidationsIsInValidEmail,
};
