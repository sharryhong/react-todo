import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { categoryState } from "../atoms";

const Input = styled.input`
  width: 15em;
  height: 2.5em;
  padding: 0.5em 0.6em;
  border-style: solid;
`;
const Button = styled.button`
  height: 2.5em;
  padding: 0.5em 0.6em;
`;

function Category() {
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm();
  const onValid = ({ category }: any) => {
    setCategory((oldCategory: string[]) => {
      return [...oldCategory, category];
    });
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Input
        {...register("category", { required: true })}
        type="text"
        placeholder="write category"
      />
      <Button>Add</Button>
    </form>
  );
}

export default Category;
