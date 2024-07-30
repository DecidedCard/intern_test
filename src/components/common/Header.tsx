import { useUserCheckQuery } from "../../hook/useQuery";

import useUserStore from "../../share/store/useUserStore";

const Header = () => {
  const { isFetching, isError } = useUserCheckQuery();
  const { user } = useUserStore();

  if (isFetching) {
    return <div>로딩 중....</div>;
  }

  if (isError) {
    return (
      <header className="text-center text-xl mt-2">
        로그인해주시기 바랍니다.
      </header>
    );
  }

  console.log(user);

  return (
    <header className="text-center text-xl mt-2">
      {user && (
        <div>
          <p>{user.nickname}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
