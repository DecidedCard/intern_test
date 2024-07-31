import { useMutation, useQueryClient } from "@tanstack/react-query";

import { profileChange, signIn } from "../api/jwt";

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

export const useProfileChangeMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: profileChangeMutation } = useMutation({
    mutationFn: profileChange,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.userCheck] });
      alert("프로필이 변경되었습니다.");
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };
      alert(data.message);
    },
  });

  return { profileChangeMutation };
};
