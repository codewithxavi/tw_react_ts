// components
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";

// hooks
import { useTodoHook } from "./hooks/useTodoHooks";

// css
import "./App.css";

function App() {
  const [todos, dispatch] = useTodoHook();

  const createTodoHandler = (newTodoText: string): void => {
    dispatch({
      type: "add",
      payload: { text: newTodoText },
    });
  };

  const deleteTodoHandler = (id: string): void => {
    dispatch({
      type: "delete",
      payload: { id },
    });
  };

  const updateTodoHandler = (newTodoText: string): void => {
    dispatch({
      type: "update",
      payload: { id: newTodoText },
    });
  }

  return (
    <div className="App">
      <h2>Todo List - TS</h2>
      <Form createTodo={createTodoHandler} />
      <Todo
        todoData={todos}
        deleteTodo={deleteTodoHandler}
        updateTodo={updateTodoHandler}
        // setTodoList={setTodoList}
        // developer="JaviScript"
      ></Todo>
    </div>
  );
}

export default App;
