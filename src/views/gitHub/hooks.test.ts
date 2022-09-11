import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useGitHub } from "./hooks";

const mockApiGitHub = (saveValue: any) => {
  saveValue({ login: "fake user name" });
};
const mocksubmit: any = {
  preventDefault: () => null
};
const mockSubmitDefaultUserName: any = {
  target: {
    value: ""
  }
};
const mockSubmitUserName: any = {
  target: {
    value: "test"
  }
};

describe("GitHub component", () => {
  test("shoud be simulate submit not found user name", () => {
    const { result } = renderHook(() => useGitHub(mockApiGitHub));
    act(() => {
      result.current.inputs.handleChangeUserName(mockSubmitDefaultUserName);
      result.current.form.handleSubmit(mocksubmit);
    });
    expect(result.current.formValues).toStrictEqual({ userName: "" });
  });

  test("shoud be simulate submit when found user name", () => {
    const { result } = renderHook(() => useGitHub(mockApiGitHub));
    act(() => {
      result.current.inputs.handleChangeUserName(mockSubmitUserName);
      result.current.form.handleSubmit(mocksubmit);
    });
    expect(result.current.formValues).toStrictEqual({ userName: "test" });
  });
});