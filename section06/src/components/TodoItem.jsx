import "./TodoItem.css";
import { useRef, useState } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState("");

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onDeleteItem = () => {
    onDelete(id);
  };
  const onEditItem = () => {
    onEdit(id, editContent);
    setEditContent("");
    setEdit(!edit);
  };
  const onEditToggle = () => {
    setEdit(!edit);
  };
  const onChangeContent = (e) => {
    setEditContent(e.target.value);
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
      <div className="EditWrap" style={{ display: edit == true ? "block" : "none" }}>
        <input type="text" onChange={onChangeContent} value={editContent} placeholder="수정할 내용을 작성하세요" />
        <button onClick={onEditItem}>완료</button>
      </div>
    </div>
  );
};
export default TodoItem;
