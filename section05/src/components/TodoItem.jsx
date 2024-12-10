import "./TodoItem.css";
import { useRef, useState } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete, onEdit }) => {
  const setEdit = useRef(false);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onDeleteItem = () => {
    onDelete(id);
  };
  const onEditItem = () => {
    onEdit(id);
  };
  const onEditToggle = () => {
    setEdit.current = !setEdit.current;
  };
  return (
    <div className="TodoItemWrap">
      <div className="TodoItem">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
        <div className="contents">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onEditToggle}>수정</button>
        <button onClick={onDeleteItem}>삭제</button>
      </div>
      <div className="EditWrap" style={{ display: onEditToggle == true ? "block" : "none" }}>
        <input type="text" placeholder="수정할 내용을 작성하세요" />
        <button onClick={onEditItem}>완료</button>
      </div>
    </div>
  );
};
export default TodoItem;
