import { render } from "@testing-library/react";

import Navigation from "../components/common/Navigation";
import { BrowserRouter } from "react-router-dom";

describe("<Navigation />", () => {
  it("snapshot testing", () => {
    const utils = render(
      <BrowserRouter>
        <Navigation text="test" path="test" />
      </BrowserRouter>
    );
    expect(utils.container).toMatchInlineSnapshot(`
<div>
  <a
    class="p-2 border-2 border-solid border-black rounded-lg"
    href="/test"
  >
    test
  </a>
</div>
`);
  });

  it("props 입력을 확인", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navigation text="정해준" path="test" />
      </BrowserRouter>
    );
    expect(getByText("정해준")).toBeTruthy();
  });
});
