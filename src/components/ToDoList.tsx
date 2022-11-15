import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import Category from "./Category";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
`;
const Tabs = styled.div`
  width: 100%;
  min-height: 9.5em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 1em 0;
  gap: 1.5em;
`;
const Tab = styled.div`
  width: 31%;
  border: 1px solid #ccc;
`;
const TabTitle = styled.strong`
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-bottom: 0.7em;
  padding: 0.5em 0.7em;
  background-color: #eee;
`;
const List = styled.ul`
  padding: 0.5em 0.7em;
`;

function ToDoList() {
  const categories = useRecoilValue(categoryState);
  const toDos = useRecoilValue(toDoState);
  const toDoCategory = (category: string) => {
    return toDos.filter((todo) => todo.category === category);
  };

  return (
    <Wrap>
      <CreateToDo />
      <Tabs>
        {categories.map((category) => (
          <Tab key={category}>
            <TabTitle>{category}</TabTitle>
            <List>
              {toDoCategory(category).map((todo) => (
                <ToDo key={todo.id} {...todo} />
              ))}
            </List>
          </Tab>
        ))}
        <Category />
      </Tabs>
    </Wrap>
  );
}

export default ToDoList;
