import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signIn } from "../api/jwt";

import QUERY_KEY from "../util/queryKey";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const useSignInMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signInMutation } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.userCheck] });
      navigate("/");
    },

    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };

      alert(data.message);
    },
  });

  return { signInMutation };
};
