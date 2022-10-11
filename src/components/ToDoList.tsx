import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoAtom } from "../atoms";

interface IForm {
  toDo: string;
}

export interface IToDo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoAtom);
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TODO" },
      ...oldToDos,
    ]);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo")} type="text" placeholder="write to do" />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
