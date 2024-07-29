import { Link } from "react-router-dom";
import { useJsonPlaceHolderTodosQuery } from "../hook/useQuery";

import type { Todo } from "../types";

const Test = () => {
  const { isFetching, isError, data } = useJsonPlaceHolderTodosQuery();

  if (isFetching) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러!</div>;
  }

  return (
    <>
      <Link
        className="sticky top-2 left-2 p-2 border-2 border-solid border-black rounded-lg"
        to={"/"}
      >
        홈으로
      </Link>
      <main className="flex flex-col items-center">
        <h1 className="text-4xl my-3 font-bold">TodoList</h1>

        {data.map((item: Todo) => {
          return (
            <ol
              className="flex items-center my-1 px-2 w-min h-10 text-nowrap border border-solid border-black rounded-lg"
              key={item.id}
            >
              <h2>{item.title}</h2>
              <p>{item.userId}</p>
            </ol>
          );
        })}
      </main>
    </>
  );
};

export default Test;
