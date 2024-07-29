import Navigation from "../components/common/Navigation";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-5 w-screen h-screen">
      <div className="flex gap-4">
        <Navigation text="로그인/회원가입" path="/sign" />
        <Navigation text="마이페이지" path="/my-page" />
      </div>
      <Navigation text="JSONplaceHolder test" path="/test" />
    </main>
  );
};

export default Home;
