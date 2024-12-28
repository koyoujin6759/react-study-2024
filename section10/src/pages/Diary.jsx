import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import Viewer from "../components/Viewer";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../hooks/useDiary";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext);
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>로딩중입니다..!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <>
      <Header title={`${title} 기록`} leftChild={<Button text={"뒤로가기"} onClick={() => nav(-1)} />} rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />} />
      <Viewer emotionId={emotionId} content={content} />
    </>
  );
};
export default Diary;
