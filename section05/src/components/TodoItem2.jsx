import "./TodoItem2.css";
import { useState } from "react";

const TodoItem2 = ({ id, isDone, content, date, onDelete }) => {
  const onDeleteItem = () => {
    onDelete(id);
  };
  return (
    <div className="list-wrap">
      <div className="list">
        <input readOnly type="checkbox" checked={isDone} />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onDeleteItem}>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem2;
