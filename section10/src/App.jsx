import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { createContext, useState, useRef, useReducer } from "react";

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2024-12-23").getTime(),
//     emotionId: 1,
//     content: "1번 일기내용",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2024-12-24").getTime(),
//     emotionId: 2,
//     content: "2번 일기내용",
//   },
//   {
//     id: 3,
//     createdDate: new Date("2024-12-25").getTime(),
//     emotionId: 3,
//     content: "3번 일기내용",
//   },
// ];
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [action.data, ...state];
    case "delete":
      return state.filter((item) => String(item.id) !== String(action.id));
    case "update":
      return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(4);

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

  const onDelete = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

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

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
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
