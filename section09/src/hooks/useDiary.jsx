import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  // use 가 앞에 붙으면 커스텀훅이된다. 커스텀훅 안에서는 usestate, useeffect 같은 리액트훅들을 사용할수있다.
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 페이지입니다.");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
};

export default useDiary;
