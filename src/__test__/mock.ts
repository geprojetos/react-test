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

const mockApiGitHub = (saveValue: any) => {
  saveValue({ login: "fake user name" });
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

export {
  mockEventName,
  mockEventEmail,
  mockSubmit,
  mockApiGitHub,
  mockSubmitDefaultUserName,
  mockSubmitUserName,
};
