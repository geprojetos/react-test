import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./hooks";

const mockEventName: any = {
  target: {
    value: "test name"
  }
};
const mockEventEmail: any = {
  target: {
    value: "test email"
  }
};
const mocksubmit: any = {
  preventDefault: () => null
};

describe("Form component", () => {
  test("shoud be change input name", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.inputs.handleChangeName(mockEventName);
    });
    expect(result.current.formValues.name).toBe("test name");
  });

  test("shoud be change input email", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      const eventName: any = {
        target: {
          value: "test email"
        }
      };
      result.current.inputs.handleChangeEmail(eventName);
    });
    expect(result.current.formValues.email).toBe("test email");
  });

  test("shoud be submit form", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.inputs.handleChangeEmail(mockEventEmail);
    });
    expect(result.current.formValues.email).toBe("test email");
  });

  test("shoud be submit form default value", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.form.handleSubmit(mocksubmit);
    });
    expect(result.current.formValues).toStrictEqual({
      name: "",
      email: ""
    });
  });
});
