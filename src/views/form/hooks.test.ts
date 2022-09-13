import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./hooks";

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

describe("Form component", () => {
  test("should be change input name", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.inputs.handleChangeName(mockEventName);
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formValues.name).toBe("test name");
  });

  test("should be change input email", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.inputs.handleChangeEmail(mockEventEmail);
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formValues.email).toBe("test email");
  });

  test("should be required name", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formErrors.name).toBe("Name is required");
  });

  test("should be required email", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formErrors.email).toBe("Email is required");
  });

  test("should be submit form default value", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formValues).toStrictEqual({
      name: "",
      email: "",
    });
  });

  test("should be change input name", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.inputs.handleChangeName(mockEventName);
      result.current.inputs.handleChangeEmail(mockEventEmail);
      result.current.form.handleSubmit(mockSubmit);
      result.current.form.handleSubmit(mockSubmit);
      result.current.form.handleSubmit(mockSubmit);
    });
    expect(result.current.formValues.name).toBe("test name");
    expect(result.current.formValues.email).toBe("test email");
  });
});
