import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Link to={"/sign"}>로그인/회원가입</Link>
      <Link to={"/my-page"}>로그인/회원가입</Link>
    </main>
  );
};

export default Home;
