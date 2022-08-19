import { useState } from "react";


interface Props {
  createTodo: (text: string) => void;
}

export const Form = ({ createTodo }: Props) => {
  const [todoText, setTodoText] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (todoText === "") {
      alert("Please enter a todo");
      return;
    }
    
    createTodo(todoText);
    e.currentTarget.reset();
    setTodoText("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="newTodoText" onChange={changeHandler} placeholder="Introduce Todo" />
      <button type="submit" disabled={!todoText}>
        Create Todo
      </button>
    </form>
  );
};
