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
const Input = styled.input`
  width: 20em;
  height: 2.5em;
  padding: 0.5em 0.6em;
  font-size: 1.2rem;
  border-style: solid;
`;
const Button = styled.button`
  height: 2.5em;
  padding: 0.5em 0.6em;
  font-size: 1.2rem;
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

  const category = useRecoilValue(categoryState)[0];
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
      <form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder="write to do"
        />
        <Button>Add</Button>
      </form>
    </Container>
  );
}

export default CreateToDo;
