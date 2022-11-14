import { atom, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface IToDo {
  id: number;
  text: string;
  category: string;
}

const { persistAtom } = recoilPersist();

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<string[]>({
  key: "category",
  default: ["TODO", "DOING", "DONE"],
});

// 테스트
export const categoryToDoState = selectorFamily({
  key: "todoSelector",
  get:
    (category: string) =>
    ({ get }) => {
      const todos = get(toDoState);
      return todos.filter((todo) => todo.category === category);
    },
});
