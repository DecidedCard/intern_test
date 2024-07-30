import Navigation from "../components/common/Navigation";

const Home = () => {
  return (
    <main className="flex items-center justify-center gap-5 mx-auto w-[1280px] h-96">
      <Navigation text="로그인/회원가입" path="/sign" />
      <Navigation text="마이페이지" path="/my-page" />
      <Navigation text="JSONplaceHolder test" path="/test" />
    </main>
  );
};

export default Home;
