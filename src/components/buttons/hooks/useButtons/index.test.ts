import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useButtons } from ".";

describe("useButtons", () => {
  test("should be able increment counter", () => {
    const { result } = renderHook(() => useButtons());
    act(() => {
      result.current.buttons.handleClickIncrement();
    });
    expect(result.current.counter).toBe(1);
  });

  test("should be able decrement counter", () => {
    const { result } = renderHook(() => useButtons());
    act(() => {
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickIncrement();
      result.current.buttons.handleClickDecrement();
    });
    expect(result.current.counter).toBe(2);
  });
});
