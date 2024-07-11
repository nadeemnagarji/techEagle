import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  startTodo,
  stopTodo,
  editTodo,
  deleteTodo,
} from "../store/features/todoSlice";
interface TodoItemProps {
  id: number;
  name: string;
  duration: number;
  status: "Ongoing" | "Pending" | "Completed";
}

const TodoItem: React.FC<TodoItemProps> = ({ id, name, duration, status }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(name);
  const handleStart = () => {
    dispatch(startTodo(id));
  };

  const handleStop = () => {
    dispatch(stopTodo(id));
  };
  console.log(id);

  const handleEdit = () => {
    if (editedText.trim() === "") {
      return;
    }
    dispatch(editTodo({ todo: editedText, id: id }));
    setEdit(false);
  };

  const toggleEdit = () => {
    if (status === "Ongoing") {
      return;
    }
    setEdit(true);
  };
  return (
    <tr className="px-6 py-4 text-center text-smfont-semibold text-black dark:text-white  uppercase  font-normal ">
      <td className="dark:text-white">{id}</td>
      {edit ? (
        <td>
          {" "}
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="dark:placeholder:text-white dark:bg-slate-600 dark:border-none w-full h-full  "
          />
        </td>
      ) : (
        <td>{name}</td>
      )}
      <td>{new Date(duration * 1000).toISOString().substr(11, 8)}</td>
      <td>
        {status === "Ongoing" ? (
          <button
            className="px-2 py-1 bg-red-500 text-gray-100 dark:text-white rounded-md font-normal "
            onClick={handleStop}
          >
            Stop
          </button>
        ) : (
          <button
            className="px-2 py-1 bg-green-500 text-gray-100 dark:text-white rounded-md font-normal "
            onClick={handleStart}
            disabled={status === "Completed"}
          >
            Start
          </button>
        )}
      </td>
      <td className=" font-semibold py-2 ">
        <span className="bg-slate-300 text-xs tracking-wide  px-2 py-1 rounded-lg text-gray-800">
          {status}
        </span>
      </td>
      <td>
        {!edit ? (
          <button
            className="px-2 py-1 bg-purple-500 text-gray-100 dark:text-white rounded-md font-normal "
            onClick={() => toggleEdit()}
          >
            Edit
          </button>
        ) : (
          <button
            className="px-2 py-1 bg-green-500 text-gray-100 dark:text-white rounded-md font-normal "
            onClick={() => handleEdit()}
          >
            save
          </button>
        )}
      </td>
      <td>
        <button
          className="px-2 py-1 bg-red-500 text-gray-100 dark:text-white rounded-md font-normal "
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
