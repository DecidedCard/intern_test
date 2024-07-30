type Props = {
  onClickToggle: () => void;
};

const SignIn = ({ onClickToggle }: Props) => {
  return (
    <section className="p-3 border border-solid border-black rounded-lg text-center">
      <h2 className="mb-3 text-2xl font-semibold">로그인</h2>
      <form className="flex flex-col gap-3">
        <ol className="flex items-center gap-2 ml-auto text-xl">
          <label>ID:</label>
          <input
            type="text"
            placeholder="ID를 입력해주세요."
            className="p-1 w-96 h-10 border border-solid border-black rounded-lg"
          />
        </ol>
        <ol className="flex items-center gap-2 ml-auto text-xl">
          <label>Password:</label>
          <input
            type="text"
            placeholder="Password를 입력해주세요."
            className="p-1 w-96 h-10 border border-solid border-black rounded-lg"
          />
        </ol>
        <button type="submit">로그인</button>
        <button type="button" onClick={onClickToggle}>
          회원가입
        </button>
      </form>
    </section>
  );
};

export default SignIn;
