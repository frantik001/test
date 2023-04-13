import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { useState } from "react";

import styles from "./index.module.css";

export const TodoList = () => {
  const [filter, setFilter] = useState("active");
  const todos = useSelector(todosSelector);

  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <div>
      <div>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
