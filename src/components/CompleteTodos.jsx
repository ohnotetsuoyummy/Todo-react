import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickedBack } = props;
  return (
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
  );
};
