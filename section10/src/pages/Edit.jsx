import Header from "../components/Header";
import Button from "../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import useDiary from "../hooks/useDiary";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };

  return (
    <>
      <Header title={"일기 수정하기"} leftChild={<Button text={"뒤로가기"} onClick={() => nav(-1)} />} rightChild={<Button text={"삭제하기"} type={"negative"} onClick={onClickDelete} />} />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </>
  );
};
export default Edit;
