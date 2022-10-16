import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from ".";

describe("useCounter", () => {
  test("should be able increment counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickIncrement();
    });
    expect(result.current.counter).toBe(2);
  });

  test("should be able decrement counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickDecrement();
    });
    expect(result.current.counter).toBe(1);
  });

  test("should be able is not negative counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.buttons.handleClickDecrement();
      result.current.buttons.handleClickDecrement();
      result.current.buttons.handleClickDecrement();
    });
    expect(result.current.counter).toBe(0);
  });

  test("should be able disable buttons increment when value to equal 0", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickDecrement();
    });
    expect(result.current.isDisableIncrement).toBe(true);
  });

  test("should be able to activate increment buttons when value is greater than 0", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.buttons.handleClickIncrement();
    });
    expect(result.current.isDisableIncrement).toBe(false);
  });
});
