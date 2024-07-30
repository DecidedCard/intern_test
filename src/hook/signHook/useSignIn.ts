import useInput from "../useInput";
import { FormEvent } from "react";
import { useSignInMutation } from "../useMutation";

const useSignIn = () => {
  const { input: id, onChangeInputHandler: onChangeIdHandler } = useInput();
  const { input: password, onChangeInputHandler: onChangePasswordHandler } =
    useInput();

  const { signInMutation } = useSignInMutation();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginInfo = {
      id,
      password,
    };

    signInMutation(loginInfo);
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
