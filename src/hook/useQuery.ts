import { useQuery } from "@tanstack/react-query";

import { getTodo, getTodos } from "../api/jsonPlaceHolder";
import { userCheck } from "../api/jwt";

import QUERY_KEY from "../util/queryKey";
import useUserStore from "../share/store/useUserStore";
import { useEffect } from "react";

export const useJsonPlaceHolderTodosQuery = () => {
  const { isFetching, isError, data } = useQuery({
    queryKey: [QUERY_KEY.todos],
    queryFn: getTodos,
    staleTime: 1000 * 3,
    gcTime: 1000 * 10,
    refetchOnWindowFocus: false,
    retry: 0,
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
    retry: 0,
  });

  return { isFetching, isError, data };
};

export const useUserCheckQuery = () => {
  const { setUser } = useUserStore();
  const { isFetching, isError, data } = useQuery({
    queryKey: [QUERY_KEY.userCheck],
    queryFn: () => userCheck(localStorage.getItem("token")!),
    refetchOnWindowFocus: false,
    retry: 0,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return { isFetching, isError };
};
