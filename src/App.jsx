import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodos, setImcompleteTodos] = useState(
    ["aaaaa", "bbbbb"],
    []
  );
  const [completeTodos, setcompleteTodos] = useState(["cccc", "dddd"], []);
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {imcompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div class="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p class="title">完了のTODO</p>
        <ul id="incomplete-list">
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div class="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
