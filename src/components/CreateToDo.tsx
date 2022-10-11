import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoAtom } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TODO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("toDo")} type="text" placeholder="write to do" />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
