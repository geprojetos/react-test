import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useValidations } from "./";
import {
  mockValidationsIsValid,
  mockValidationsIsInValidName,
  mockValidationsIsInValidEmail,
} from "../../../../__test__/mock";
import { FormProps } from "../useForm";

describe("useValidations", () => {
  let mockIsValid: FormProps;
  let mockIsInValidName: FormProps;
  let mockIsInValidEmail: FormProps;

  beforeAll(() => {
    mockIsValid = mockValidationsIsValid;
    mockIsInValidName = mockValidationsIsInValidName;
    mockIsInValidEmail = mockValidationsIsInValidEmail;
  });

  test("should be able is valid form", () => {
    const { result } = renderHook(() =>
      useValidations({ formValues: mockIsValid })
    );
    act(() => {
      result.current.validations.applyValidations();
    });
    expect(result.current.validations.isValid()).toBe(true);
  });

  test("should be able is invalid form", () => {
    const { result } = renderHook(() =>
      useValidations({ formValues: mockIsInValidName })
    );
    act(() => {
      result.current.validations.applyValidations();
    });
    expect(result.current.validations.isValid()).toBe(false);
  });

  test("should be able is invalid name ('Name is required')", () => {
    const { result } = renderHook(() =>
      useValidations({ formValues: mockIsInValidName })
    );
    act(() => {
      result.current.validations.applyValidations();
    });
    expect(result.current.formErrors.name).toStrictEqual("Name is required");
  });

  test("should be able is invalid email ('Email is required')", () => {
    const { result } = renderHook(() =>
      useValidations({ formValues: mockIsInValidEmail })
    );
    act(() => {
      result.current.validations.applyValidations();
    });
    expect(result.current.formErrors.email).toStrictEqual("Email is required");
  });
});
