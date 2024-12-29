import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { DiaryStateContext } from "../App";
import { useContext, useState, useEffect } from "react";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  // console.log(data);
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기`);

  if (!curDiaryItem) {
    return <div>데이터 로딩중..!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <>
      <Header title={`${title} 기록`} leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />} rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />} />
      <Viewer emotionId={emotionId} content={content} />
    </>
  );
};

export default Diary;
