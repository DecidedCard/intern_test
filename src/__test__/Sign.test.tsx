import { render, screen } from "@testing-library/react";

import SignIn from "../components/signComponents/SignIn";

test("페이지가 제대로 뜨나요?", async () => {
  render(<SignIn onClickToggle={() => {}} />);
  const loginButton = await screen.findByRole("button");
  expect(loginButton.innerHTML).toBe("로그인");
});
