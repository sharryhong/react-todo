import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState, IToDo, Categories } from "../atoms";

const Text = styled.span`
  margin-right: 0.5em;
`;
const Button = styled.button`
  margin-right: 0.5em;
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
    <li>
      <Text>{text}</Text>
      {category !== Categories.TODO && (
        <Button onClick={() => onClick(Categories.TODO)}>To Do</Button>
      )}
      {category !== Categories.DOING && (
        <Button onClick={() => onClick(Categories.DOING)}>Doing</Button>
      )}
      {category !== Categories.DONE && (
        <Button onClick={() => onClick(Categories.DONE)}>Done</Button>
      )}
    </li>
  );
}

export default ToDo;
