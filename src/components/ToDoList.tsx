import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, categoryToDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export interface IToDo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

function ToDoList() {
  const toDos = useRecoilValue(categoryToDoState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <>
      <h1>To Do</h1>
      <select value={category} onInput={onInput}>
        <option value="TODO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
