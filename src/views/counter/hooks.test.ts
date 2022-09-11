import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./hooks";

describe("Counter component", () => {
  test("should increment counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.buttons.handleClickIncrement();
    });
    expect(result.current.counter).toBe(1);
  });

  test("should decrement counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickDecrement();
    });
    expect(result.current.counter).toBe(2);
  });
});
