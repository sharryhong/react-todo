import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { Categories, categoryState } from "../atoms";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1rem;
`;

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm();
  const onValid = ({ category }: any) => {
    console.log(category);

    setValue("category", "");
  };
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Container>
      <strong>카테고리 : </strong>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("category", { required: true })}
          type="text"
          placeholder="category"
        />
        <button>Add</button>
      </form>
    </Container>
  );
}

export default Category;
