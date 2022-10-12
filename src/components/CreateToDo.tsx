import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1rem;
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  useEffect(() => {
    const todosLocal = localStorage.getItem("recoil-persist");
    if (todosLocal) {
      const { toDo } = JSON.parse(todosLocal);
      setToDos(toDo);
    }
  }, [setToDos]);

  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Container>
      <strong>To Do : </strong>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder="write to do"
        />
        <button>Add</button>
      </form>
    </Container>
  );
}

export default CreateToDo;
