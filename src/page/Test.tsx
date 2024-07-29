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
    <main>
      {data.map((item: Todo) => {
        return (
          <ol className="flex border border-solid border-black" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.userId}</p>
          </ol>
        );
      })}
    </main>
  );
};

export default Test;
