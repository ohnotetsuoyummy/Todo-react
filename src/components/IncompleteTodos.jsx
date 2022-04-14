import React from "react";

export const IncompleteTodos = (props) => {
  const { imcompleteTodos, onclickComplete, onClikedDelete } = props;
  return (
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
  );
};
