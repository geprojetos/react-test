import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./";
import {
  mockEventEmail,
  mockEventName,
  mockSubmit,
} from "../../../../__test__/mock";

describe("useForm", () => {
  test("should be able change input name", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.inputs.handleChangeName(mockEventName);
    });
    expect(result.current.formValues.name).toBe("test name");
  });

  test("should be able change input email", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.inputs.handleChangeEmail(mockEventEmail);
    });
    expect(result.current.formValues.email).toBe("test email");
  });

  test("should be able submit form default value", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formValues).toStrictEqual({
      name: "",
      email: "",
    });
  });
});
