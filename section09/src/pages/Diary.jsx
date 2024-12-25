import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { DiaryStateContext } from "../App";
import { useContext, useState, useEffect } from "react";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  // console.log(data);
  const [currentItem, setCurrentItem] = useState();
  useEffect(() => {
    const currentItem = data.find((item) => String(item.id) === String(params.id));
    if (!currentItem) {
      indow.alert("존재하지 않는 페이지입니다.");
      nav("/", { replace: true });
    }
    setCurrentItem(currentItem);
  }, [params.id]);
  console.log(currentItem);

  return (
    <>
      <Header title={"yyyy-mm-dd 기록"} leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />} rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />} />
      <Viewer />
    </>
  );
};

export default Diary;
