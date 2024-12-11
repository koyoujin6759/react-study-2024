import { useState } from "react";

const Editor2 = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    onCreate(content);
    setContent("");
  };

  return (
    <div className="input-wrap">
      <input type="text" value={content} onChange={onChangeContent} placeholder="오늘의 할일을 적어주세요" />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor2;
