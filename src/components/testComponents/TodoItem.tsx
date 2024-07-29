import type { Todo } from "../../types";

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <ol
      className="flex items-center my-1 px-2 w-min h-10 text-nowrap border border-solid border-black rounded-lg"
      key={todo.id}
    >
      <h2>{todo.title}</h2>
      <p>{todo.userId}</p>
    </ol>
  );
};

export default TodoItem;
