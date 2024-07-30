import useSignUp from "../../hook/signHook/useSignUp";

type Props = {
  onClickToggle: () => void;
};

const SignUp = ({ onClickToggle }: Props) => {
  const {
    id,
    nickname,
    password,
    onChangeIdHandler,
    onChangeNicknameHandler,
    onChangePasswordHandler,
    onSubmitSignUpHandler,
  } = useSignUp();

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
        <button type="submit">회원가입</button>
        <button type="button" onClick={onClickToggle}>
          로그인
        </button>
      </form>
    </section>
  );
};

export default SignUp;
