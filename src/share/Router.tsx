import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../page/Home";
import Sign from "../page/Sign";
import Test from "../page/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/my-page" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
