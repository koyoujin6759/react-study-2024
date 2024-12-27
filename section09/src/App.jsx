import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import Edit from "./pages/Edit";

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2024-12-23").getTime(),
//     emotionId: 1,
//     content: "1번 일기내용",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2024-12-27").getTime(),
//     emotionId: 2,
//     content: "2번 일기내용",
//   },
//   {
//     id: 3,
//     createdDate: new Date("2024-11-17").getTime(),
//     emotionId: 3,
//     content: "3번 일기내용",
//   },
// ];
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "init":
      return action.data;
    case "create":
      // return [action.data, ...state];
      nextState = [action.data, ...state];
      break;
    case "update": {
      nextState = state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
      break;
    }
    case "delete": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}
export const DiaryStateContext = createContext(); //data 전달
export const DiaryDispatchContext = createContext(); //상태변화함수 전달

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      //배열이 아니면
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "init",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  //기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "update",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  //기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩 중입니다...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/diary/:id" element={<Diary />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="/*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
