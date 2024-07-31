import { useJsonPlaceHolderTodosQuery } from "../hook/useQuery";

import TodoItem from "../components/testComponents/TodoItem";

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
    <main className="flex flex-col items-center">
      <h1 className="text-4xl my-3 font-bold">TodoList</h1>

      {data.map((item: Todo) => {
        return <TodoItem todo={item} />;
      })}
    </main>
  );
};

export default Test;
