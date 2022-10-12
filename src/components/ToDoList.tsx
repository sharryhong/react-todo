import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Categories, categoryState, categoryToDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

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
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1rem;
`;

function ToDoList() {
  const toDos = useRecoilValue(categoryToDoState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const { register, handleSubmit, setValue } = useForm();
  const onValid = ({ category }: any) => {
    console.log(category);

    setValue("category", "");
  };

  return (
    <Wrap>
      <Title>To Do</Title>
      <Container>
        <strong>카테고리 : </strong>
        <select value={category} onInput={onInput}>
          <option value={Categories.TODO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
        {/* <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("category", { required: true })}
            type="text"
            placeholder="category"
          />
          <button>Add</button>
        </form> */}
      </Container>

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
