import "./TodoItem2.css";
import { useState } from "react";

const TodoItem2 = ({ id, isDone, content, date, onDelete, onEdit }) => {
  const onDeleteItem = () => {
    onDelete(id);
  };
  const onEditToggle = () => {
    setEdit(!edit);
  };
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState("");
  const onChangeContent = (e) => {
    setEditContent(e.target.value);
  };
  const onEditSubmit = () => {
    onEdit(id, editContent);
    setEditContent("");
    setEdit(false);
  };
  return (
    <>
      <div className="item-wrap">
        <div className="todo-item">
          <input type="checkbox" readOnly />
          <div className="content">{content}</div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={onDeleteItem}>삭제</button>
          <button onClick={onEditToggle}>수정</button>
        </div>
        <div className="edit-wrap" style={{ display: edit == true ? "block" : "none" }}>
          <input type="text" value={editContent} onChange={onChangeContent} placeholder="수정할 내용을 입력하세요" />
          <button onClick={onEditSubmit}>완료</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem2;
