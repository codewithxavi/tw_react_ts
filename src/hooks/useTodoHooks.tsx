// deps
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// types
import { TodoType, TodoAction } from "../types/types.d";

const todosReducer = (
  state: Array<TodoType>,
  action: TodoAction
): Array<TodoType> => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload.text,
          date: new Date().toLocaleDateString(),
          isDone: false,
        },
      ];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "update":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const INITIAL_STATE: Array<TodoType> = [
  {
    id: uuidv4(),
    text: "Learn React",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
  {
    id: uuidv4(),
    text: "Learn TypeScript",
    date: new Date().toLocaleDateString(),
    isDone: true,
  },
  {
    id: uuidv4(),
    text: "Learn React Hooks",
    date: new Date().toLocaleDateString(),
    isDone: false,
  },
];

export const useTodoHook = () => useReducer(todosReducer, INITIAL_STATE);
