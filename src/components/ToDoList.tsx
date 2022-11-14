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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1em 0;
  gap: 1.5em;
`;
const Tab = styled.div`
  flex: 1 1 30%;
`;
const TabTitle = styled.strong`
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-bottom: 0.7em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
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
      {/* <Category /> */}
      <Tabs>
        {categories.map((category) => (
          <Tab key={category}>
            <TabTitle>{category}</TabTitle>
            <ul>
              {toDoCategory(category).map((todo) => (
                <ToDo key={todo.id} {...todo} />
              ))}
            </ul>
          </Tab>
        ))}
      </Tabs>
    </Wrap>
  );
}

export default ToDoList;
