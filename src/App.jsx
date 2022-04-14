import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([], []);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickedAdd = () => {
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  const onClikedDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    console.log(newTodos);
    newTodos.splice(index, 1);
    console.log(imcompleteTodos);
    setImcompleteTodos(newTodos);
  };

  const onclickComplete = (index) => {
    const newIncompleteTodos = [...imcompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setImcompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  const onClickedBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setImcompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickedAdd}
      />
      <IncompleteTodos
        imcompleteTodos={imcompleteTodos}
        onclickComplete={onclickComplete}
        onClikedDelete={onClikedDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickedBack={onClickedBack}
      />
    </>
  );
};
