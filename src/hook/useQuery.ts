import { useQuery } from "@tanstack/react-query";

import { getTodo, getTodos } from "../api/jsonPlaceHolder";

import QUERY_KEY from "../util/queryKey";

export const useJsonPlaceHolderTodosQuery = () => {
  const { isFetching, isError, data } = useQuery({
    queryKey: [QUERY_KEY.todos],
    queryFn: getTodos,
    staleTime: 1000 * 3,
    gcTime: 1000 * 10,
    refetchOnWindowFocus: false,
  });

  return { isFetching, isError, data };
};

export const useJsonPlaceHolderTodoQuery = () => {
  const { isFetching, isError, data } = useQuery({
    queryKey: [QUERY_KEY.todo],
    queryFn: getTodo,
    staleTime: 1000 * 3,
    gcTime: 1000 * 10,
    refetchOnWindowFocus: false,
  });

  return { isFetching, isError, data };
};
