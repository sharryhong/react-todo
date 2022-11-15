import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState, IToDo, categoryState } from "../atoms";

const List = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  align-items: center;
  margin-bottom: 0.8em;
`;

function ToDo({ text, category, id }: IToDo) {
  const categories = useRecoilValue(categoryState);
  const [selected, setSelected] = useState(category);
  const setToDos = useSetRecoilState(toDoState);
  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSelected(value);
    changeToDos(value);
  };
  const changeToDos = (newCategory: string) => {
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
      <select onChange={onChange} value={selected}>
        {categories.map((item: string) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </List>
  );
}

export default ToDo;
