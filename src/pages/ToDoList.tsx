import React, { FormEvent, useState } from "react";

function ToDoList() {
  const [todo, setTodo] = useState("");
  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default ToDoList;
