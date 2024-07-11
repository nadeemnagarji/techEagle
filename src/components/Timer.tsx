import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateDuration } from "../store/features/todoSlice";

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const activeTodoId = useSelector(
    (state: RootState) => state.todos.activeTodoId
  );

  useEffect(() => {
    if (activeTodoId !== null) {
      const interval = setInterval(() => {
        dispatch(updateDuration());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [activeTodoId, dispatch]);

  return null;
};

export default Timer;
