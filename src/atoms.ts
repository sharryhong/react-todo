import { atom } from "recoil";
import { IToDo } from "./components/ToDoList";

export const toDoAtom = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
