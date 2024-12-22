import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const contentRef = useRef();
  const [contents, setContents] = useState("");
  const onChangeContent = (e) => {
    setContents(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (contents === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(contents);
    setContents("");
  };
  return (
    <div className="Editor">
      <input ref={contentRef} onKeyDown={onKeyDown} value={contents} onChange={onChangeContent} placeholder="새로운 todo.." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor;
