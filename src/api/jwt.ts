import { jwtInstance } from "./axios";

import type { UserInfoInput } from "../types";

export const signUp = async (userInfo: UserInfoInput) => {
  try {
    const res = await jwtInstance.post("/register", userInfo);
    return res.data;
  } catch (error) {
    return error;
  }
};
