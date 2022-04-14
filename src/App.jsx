import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickedAdd}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {imcompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div class="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onclickComplete(index)}>完了</button>
                  <button onClick={() => onClikedDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p class="title">完了のTODO</p>
        <ul id="incomplete-list">
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div class="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickedBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
