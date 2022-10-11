import { IToDo } from "./ToDoList";
import { useSetRecoilState } from "recoil";
import { toDoAtom } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoAtom);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const index = oldToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: newCategory };
      return [
        ...oldToDos.slice(0, index),
        newToDo,
        ...oldToDos.slice(index + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TODO" && (
        <button onClick={() => onClick("TODO")}>To Do</button>
      )}
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default ToDo;
