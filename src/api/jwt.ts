import { jwtInstance } from "./axios";

import type { Profile, UserInfoInput } from "../types";

export const signUp = async (userInfo: UserInfoInput) => {
  try {
    const res = await jwtInstance.post("/register", userInfo);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const signIn = async (userInfo: Omit<UserInfoInput, "nickname">) => {
  try {
    const res = await jwtInstance.post("/login", userInfo);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const userCheck = async (token: string) => {
  try {
    const res = await jwtInstance.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const profileChange = async (token: string, profileInput: Profile) => {
  try {
    const res = await jwtInstance.patch("/profile", profileInput, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
