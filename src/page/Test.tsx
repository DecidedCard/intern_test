import { Link } from "react-router-dom";
import { useJsonPlaceHolderTodosQuery } from "../hook/useQuery";

import type { Todo } from "../types";
import TodoItem from "../components/testComponents/TodoItem";

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
          return <TodoItem todo={item} />;
        })}
      </main>
    </>
  );
};

export default Test;
