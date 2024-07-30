import { useNavigate } from "react-router-dom";

import { signIn, signUp } from "../../api/jwt";

import useInput from "../useInput";

const useSignUp = () => {
  const { input: nickname, onChangeInputHandler: onChangeNicknameHandler } =
    useInput();
  const { input: id, onChangeInputHandler: onChangeIdHandler } = useInput();
  const { input: password, onChangeInputHandler: onChangePasswordHandler } =
    useInput();

  const navigation = useNavigate();

  const onSubmitSignUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userInfo = {
      id,
      password,
      nickname,
    };

    const loginInfo = {
      id,
      password,
    };

    const res = await signUp(userInfo);

    if (res.message === "회원가입 완료") {
      alert(res.message);
      await signIn(loginInfo);
      navigation("/");
    } else {
      alert(res.response.data.message);
    }
  };

  return {
    nickname,
    id,
    password,
    onChangeIdHandler,
    onChangeNicknameHandler,
    onChangePasswordHandler,
    onSubmitSignUpHandler,
  };
};

export default useSignUp;