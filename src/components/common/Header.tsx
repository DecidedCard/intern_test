import { useUserCheckQuery } from "../../hook/useQuery";

import useUserStore from "../../share/store/useUserStore";

const Header = () => {
  const { isFetching, isError } = useUserCheckQuery();
  const { user } = useUserStore();

  if (isFetching) {
    return <div>로딩 중....</div>;
  }

  if (isError) {
    return <div>에러!</div>;
  }

  console.log(user);

  return <header className="text-center text-xl mt-2">userCheck</header>;
};

export default Header;
