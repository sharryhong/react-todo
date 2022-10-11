import React from "react";
import { useRecoilValue } from "recoil";
import { toDoAtom } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export interface IToDo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

function ToDoList() {
  const toDos = useRecoilValue(toDoAtom);

  return (
    <>
      <h1>To Do</h1>
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
