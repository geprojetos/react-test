import "@testing-library/react-hooks/lib/native/pure";
import { renderHook, act } from "@testing-library/react-hooks";
import { useGitHub } from ".";
import {
  mockGitHubApi,
  mockSubmit,
  mockSubmitUserName,
} from "../../../../__test__/mock";

describe("useGitHub", () => {
  let mockGitHub: any;

  beforeAll(() => {
    mockGitHub = mockGitHubApi;
  });

  test("should be able simulate submit when found user name", async () => {
    const { result } = renderHook(() => useGitHub(mockGitHub));

    await act(() => {
      result.current.inputs.handleChangeUserName(mockSubmitUserName);
      result.current.form.handleSubmit(mockSubmit);
    });

    expect(result.current.userInfo).toStrictEqual(mockGitHub().userInfo);
  });
});
