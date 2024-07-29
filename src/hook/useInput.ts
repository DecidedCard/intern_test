import { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput("");
  };

  return { input, onChangeInputHandler, reset };
};

export default useInput;
