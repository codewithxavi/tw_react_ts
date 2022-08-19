// types
import { TodoType } from "../types/types.d";

type Props = {
  todoData: Array<TodoType>;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
};

export const Todo = ({ todoData, deleteTodo, updateTodo }: Props) => {
  if (todoData.length === 0) return <h2>No todos!</h2>;

  return (
    <>
      <ul className="Item_list">
        {todoData.map((todo) => (
          <li key={todo.id} className="Item">
            <h3>{todo.text}</h3>
            <p>{todo.date}</p>
            <p>{todo.isDone ? <span className="completed">Completed</span> : <span>Completed</span> }</p>
            {/* <strong>{todo.id}</strong> */}
            <button onClick={() => updateTodo(todo.id)}>Update</button>{" "}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
