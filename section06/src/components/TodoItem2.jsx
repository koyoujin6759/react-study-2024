import "./TodoItem2.css";
import { useState, memo } from "react";

const TodoItem2 = ({ id, isDone, content, date, onDelete, onEdit, onUpdate }) => {
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
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  return (
    <>
      <div className="item-wrap">
        <div className="todo-item">
          <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
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
// export default memo(TodoItem2, (prevProps, nextProps) => {
//   //반환값에 따라 props가 바뀌었는지 안바뀌었는지 판단
//   // true-> props 바뀌지 않음 -> 리렌더링x
//   // false-> props 바뀌었다 -> 리렌더링

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
export default memo(TodoItem2);
