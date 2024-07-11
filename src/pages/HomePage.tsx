import { useRef, useState } from "react";
import { addTodo } from "../store/features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Table from "../components/Table";
import TodoItem from "../components/SingleTodo";
import Timer from "../components/Timer";

export default function HomePage() {
  const id = useRef<number>(0);
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    dispatch(addTodo({ todo, id: id.current }));
    setTodo("");
    id.current++;
  };

  return (
    <div className="w-full pt-4 mt-2  rounded-md bg-transparent ">
      <form
        onSubmit={handleSubmit}
        className=" w-full md:h-14  flex items-center justify-center gap-2 fixed  inset-y-20 z-50 bg-white h-28 dark:bg-gray-900 flex-col md:flex-row"
      >
        <input
          placeholder="Search Products"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="md:w-1/2   h-full w-[90%]   placeholder:text-gray-700 placeholder:pl-4 dark:placeholder:text-white dark:bg-slate-600 dark:border-none"
        />
        <button className=" h-full px-4 rounded bg-green-500 text-gray-800 md:w-28 font-medium w-1/4 ">
          Add Todo
        </button>
      </form>

      <div className="w-full mt-10 md:mt-0   dark:bg-gray-900  pt-16  rounded-md   h-[400px] px-4 flex flex-col items-center items-center">
        <Table>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              duration={todo.duration}
              status={todo.status}
            />
          ))}
        </Table>
        <Timer />
      </div>
    </div>
  );
}
