import "./TodoItem2.css";
import { useState } from "react";

const TodoItem2 = ({ id, content, date, onDelete }) => {
  const onDeleteItem = () => {
    onDelete(id);
  };
  return (
    <>
      <div className="item-wrap">
        <div className="todo-item">
          <input type="checkbox" readOnly />
          <div className="content">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={onDeleteItem}>삭제</button>
          <button>수정</button>
        </div>
        <div className="edit-wrap">
          <input type="text" placeholder="수정할 내용을 입력하세요" />
          <button>완료</button>
        </div>
      </div>
    </>
  );
};
export default TodoItem2;
