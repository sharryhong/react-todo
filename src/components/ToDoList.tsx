import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, categoryToDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import Category from "./Category";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

function ToDoList() {
  const toDos = useRecoilValue(categoryToDoState);

  return (
    <Wrap>
      <Title>To Do</Title>
      <Category />
      <CreateToDo />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </Wrap>
  );
}

export default ToDoList;
