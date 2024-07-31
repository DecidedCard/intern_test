import { render, screen } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SignIn from "../components/signComponents/SignIn";

const queryClient = new QueryClient();

test("페이지가 제대로 뜨나요?", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SignIn onClickToggle={() => {}} />
    </QueryClientProvider>
  );
  const loginButton = await screen.findByRole("button");
  expect(loginButton.innerHTML).toBe("로그인");
});
