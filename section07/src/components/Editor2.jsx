import { useState } from "react";

const Editor2 = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    onCreate(content);
  };

  return (
    <div>
      <div className="editor-wrap">
        <input type="text" value={content} onChange={onChangeContent} placeholder="할일을 입력하세요" />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default Editor2;
