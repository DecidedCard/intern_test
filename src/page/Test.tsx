import { useJsonPlaceHolderTodosQuery } from "../hook/useQuery";

const Test = () => {
  const { isFetching, isError, data } = useJsonPlaceHolderTodosQuery();

  if (isFetching) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러!</div>;
  }

  console.log(data);
  return <main>Test</main>;
};

export default Test;
