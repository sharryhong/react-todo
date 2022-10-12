import { atom, selector } from "recoil";
import { IToDo } from "./components/ToDoList";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TODO",
});

export const categoryToDoState = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(toDoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
