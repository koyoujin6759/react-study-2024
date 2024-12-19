import { useState, useRef, useReducer } from "react";
import Header from "./components/Header";
import Editor2 from "./components/Editor2";
import List2 from "./components/List2";
// import Exam from "./components/Exam";
import "./App.css";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "청소하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [...state, action.data];
    case "delete":
      return state.filter((item) => item.id !== action.targetId);
    case "update":
      return state.map((item) => (item.id == action.targetId ? { ...item, isDone: !item.isDone } : item));
    case "edit":
      return state.map((item) => (item.id === action.targetId ? { ...item, content: action.content, date: new Date().getTime() } : item));
  }
}
function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };
  const onUpdate = (targetId) => {
    dispatch({
      type: "update",
      targetId: targetId,
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "delete",
      targetId: targetId,
    });
  };
  const onEdit = (targetId, newContent) => {
    dispatch({
      type: "edit",
      targetId: targetId,
      content: newContent,
    });
  };
  return (
    <div className="App">
      <Header />
      <Editor2 onCreate={onCreate} />
      <List2 todos={todos} onDelete={onDelete} onUpdate={onUpdate} onEdit={onEdit} />
      {/* <Exam /> */}
    </div>
  );
}

export default App;
