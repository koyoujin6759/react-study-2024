import "./TodoItem2.css";
import { useState } from "react";

const TodoItem2 = ({ content, date, id, isDone, onDelete, onEdit }) => {
  const onDeleteItem = () => {
    onDelete(id);
  };
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState("");

  const editToggle = () => {
    setEdit(!edit);
  };
  const onChangeContent = (e) => {
    setEditContent(e.target.value);
  };
  const onEditItem = () => {
    onEdit(id, editContent);
    setEdit(false);
    setEditContent("");
  };
  return (
    <div className="item-wrap">
      <div className="item">
        <input type="checkbox" readOnly />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onDeleteItem}>삭제</button>
        <button onClick={editToggle}>수정</button>
      </div>
      <div className="edit-wrap" style={{ display: edit == true ? "block" : "none" }}>
        <input type="text" value={editContent} onChange={onChangeContent} placeholder="수정할내용을 입력하세요" />
        <button onClick={onEditItem}>완료</button>
      </div>
    </div>
  );
};

export default TodoItem2;
