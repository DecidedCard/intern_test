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

  return (
    <header className="text-center text-xl mt-2">
      {user && (
        <section className="flex justify-center items-center gap-10">
          <div className="flex items-center justify-center gap-4">
            {user.avatar ? (
              <img src={user.avatar} alt="유저 아바타" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-300" />
            )}

            <p>{user.nickname}</p>
          </div>
          <button className="text-base">로그아웃</button>
        </section>
      )}
    </header>
  );
};

export default Header;
