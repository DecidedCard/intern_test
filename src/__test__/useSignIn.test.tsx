import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import useSignIn from "../hook/signHook/useSignIn";

const queryClient = new QueryClient();

test("useSignIn의 input 초기값은 빈값이다.", async () => {
  let result = {} as ReturnType<typeof useSignIn>;

  const Wrapper = () => {
    result = useSignIn();
    return null;
  };

  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </QueryClientProvider>
  );
  expect(result.id).toBe("");
  expect(result.password).toBe("");
});
