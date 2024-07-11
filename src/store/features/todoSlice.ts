import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MutableRefObject } from "react";

type Todo = {
  id: number;
  name: string;
  duration: number;
  status: "Ongoing" | "Pending" | "Completed";
};

type TodosState = {
  todos: Todo[];
  activeTodoId: number | null;
};

type EditTodoProps = {
  todo: string;
  id: number;
};

type addTodoProps = {
  todo: string;
  id: number;
};
const initialState: TodosState = {
  todos: [],
  activeTodoId: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<addTodoProps>) => {
      const newTodo: Todo = {
        name: action.payload.todo,
        id: action.payload.id,
        duration: 0,
        status: "Pending",
      };
      state.todos.push(newTodo);
    },
    startTodo: (state, action: PayloadAction<number>) => {
      if (state.activeTodoId !== null) return;
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = "Ongoing";
        state.activeTodoId = todo.id;
      }
    },
    stopTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo && todo.id === state.activeTodoId) {
        todo.status = "Completed";
        state.activeTodoId = null;
      }
    },
    editTodo: (state, action: PayloadAction<EditTodoProps>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.name = action.payload.todo;
        if (todo.status === "Completed") {
          todo.status = "Pending";
        }
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      if (state.activeTodoId === action.payload) {
        state.activeTodoId = null;
      }
    },
    updateDuration: (state) => {
      const todo = state.todos.find((todo) => todo.id === state.activeTodoId);
      if (todo) {
        todo.duration += 1;
      }
    },
  },
});

export const {
  addTodo,
  startTodo,
  stopTodo,
  updateDuration,
  editTodo,
  deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
