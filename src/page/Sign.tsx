import { useState } from "react";
import SignUp from "../components/signComponents/SignUp";
import SignIn from "../components/signComponents/SignIn";

const Sign = () => {
  const [checkSign, setCheckSign] = useState(true);

  const onClickToggle = () => {
    setCheckSign(!checkSign);
  };

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      {checkSign ? (
        <SignIn onClickToggle={onClickToggle} />
      ) : (
        <SignUp onClickToggle={onClickToggle} />
      )}
    </main>
  );
};

export default Sign;
