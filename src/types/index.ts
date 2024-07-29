export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type UserInfoInput = {
  id: string;
  password: string;
  nickname: string;
};
