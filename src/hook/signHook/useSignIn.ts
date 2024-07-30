import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/jwt";
import useInput from "../useInput";
import { FormEvent } from "react";

const useSignIn = () => {
  const { input: id, onChangeInputHandler: onChangeIdHandler } = useInput();
  const { input: password, onChangeInputHandler: onChangePasswordHandler } =
    useInput();
  const navigate = useNavigate();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginInfo = {
      id,
      password,
    };

    const res = await signIn(loginInfo);

    if (res.accessToken) {
      alert("로그인 되었습니다.");
      navigate("/");
    } else {
      alert(res.response.data.message);
    }
  };

  return {
    id,
    password,
    onChangeIdHandler,
    onChangePasswordHandler,
    onSubmitHandler,
  };
};

export default useSignIn;
