import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState, IToDo } from "../atoms";

const List = styled.li`
  display: flex;
  gap: 0.5em;
  margin-bottom: 0.5em;
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
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
    <List>
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
    </List>
  );
}

export default ToDo;
