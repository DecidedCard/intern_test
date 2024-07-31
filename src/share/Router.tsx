import { BrowserRouter, Route, Routes } from "react-router-dom";

import NonAuthLayout from "../page/layout/NonAuthLayout";
import AuthLayout from "../page/layout/AuthLayout";
import Home from "../page/Home";
import Sign from "../page/Sign";
import Test from "../page/Test";
import MyPage from "../page/MyPage";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div className="sticky top-6 ml-2">
          <Navigation text="홈으로" path="/" />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />

          <Route element={<NonAuthLayout />}>
            <Route path="/sign" element={<Sign />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/my-page" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
