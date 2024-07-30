import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/jwt";
import useInput from "../../hook/useInput";

const SignUp = () => {
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

    const res = await signUp(userInfo);

    if (res.message === "회원가입 완료") {
      alert(res.message);
      navigation("/");
    } else {
      alert(res.response.data.message);
    }
  };

  return (
    <section className="p-3 border border-solid border-black rounded-lg text-center">
      <h2 className="mb-3 text-2xl font-semibold">회원가입</h2>
      <form
        onSubmit={(e) => onSubmitSignUpHandler(e)}
        className="flex flex-col gap-3"
      >
        <ol className="flex items-center gap-2 ml-auto text-xl">
          <label>이름:</label>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            value={nickname}
            onChange={(e) => onChangeNicknameHandler(e)}
            className="p-1 w-96 h-10 border border-solid border-black rounded-lg"
          />
        </ol>
        <ol className="flex items-center gap-2 ml-auto text-xl">
          <label>ID:</label>
          <input
            type="text"
            placeholder="ID를 입력해주세요."
            value={id}
            onChange={(e) => onChangeIdHandler(e)}
            className="p-1 w-96 h-10 border border-solid border-black rounded-lg"
          />
        </ol>
        <ol className="flex items-center gap-2 ml-auto text-xl">
          <label>Password:</label>
          <input
            type="text"
            placeholder="Password를 입력해주세요."
            value={password}
            onChange={(e) => onChangePasswordHandler(e)}
            className="p-1 w-96 h-10 border border-solid border-black rounded-lg"
          />
        </ol>
        <button>회원가입</button>
      </form>
    </section>
  );
};

export default SignUp;
