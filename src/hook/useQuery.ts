import { useQuery } from "@tanstack/react-query";

import { getTodos } from "../api/jsonPlaceHolder";

import QUERY_KEY from "../util/queryKey";

export const useJsonPlaceHolderTodosQuery = () => {
  const { isFetching, isError, data } = useQuery({
    queryKey: [QUERY_KEY.todos],
    queryFn: getTodos,
  });

  return { isFetching, isError, data };
};
