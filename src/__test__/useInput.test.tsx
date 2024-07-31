import { render } from "@testing-library/react";

import useInput from "../hook/useInput";

test("input의 초기값은 빈값이다.", async () => {
  let result = {} as ReturnType<typeof useInput>;

  const Wrapper = () => {
    result = useInput();
    return null;
  };

  render(<Wrapper />);
  expect(result.input).toBe("");
});
