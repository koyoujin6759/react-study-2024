import "./TodoItem2.css";
import { useState } from "react";

const TodoItem2 = ({ id, content, date, onDelete, onEdit }) => {
  const [editContent, setEditContent] = useState("");
  const [editToggle, setEditToggle] = useState(false);
  const onEditToggle = () => {
    setEditToggle(!editToggle);
  };
  const onChangeContent = (e) => {
    setEditContent(e.target.value);
  };
  const onDeleteItem = () => {
    onDelete(id);
  };
  const onEditItem = () => {
    onEdit(id, editContent);
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
        <div className="edit-wrap" style={{ display: editToggle == true ? "block" : "none" }}>
          <input type="text" value={editContent} onChange={onChangeContent} placeholder="수정할 내용을 입력하세요" />
          <button onClick={onEditItem}>완료</button>
        </div>
      </div>
    </>
  );
};
export default TodoItem2;
