import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useGitHub } from ".";
import {
  mockApiGitHub,
  mockSubmit,
  mockSubmitDefaultUserName,
  mockSubmitUserName,
} from "../../../../__test__/mock";

describe("GitHub component", () => {
  test("should be able simulate submit not found user name", () => {
    const { result } = renderHook(() => useGitHub(mockApiGitHub));
    act(() => {
      result.current.inputs.handleChangeUserName(mockSubmitDefaultUserName);
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formValues).toStrictEqual({ userName: "" });
  });

  test("should be able simulate submit when found user name", () => {
    const { result } = renderHook(() => useGitHub(mockApiGitHub));
    act(() => {
      result.current.inputs.handleChangeUserName(mockSubmitUserName);
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formValues).toStrictEqual({ userName: "test" });
  });
});
