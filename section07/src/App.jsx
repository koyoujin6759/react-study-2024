import { useState, useRef, useReducer } from "react";
import Header from "./components/Header";
import Editor2 from "./components/Editor2";
import List2 from "./components/List2";
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
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "청소하기",
    date: new Date().getTime(),
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "delete":
      return state.filter((item) => item.id !== action.targetId);
    case "edit":
      return state.map((item) => (item.id === action.targetId ? { ...item, content: action.content } : item));
  }
}
function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newData = {
      id: idRef.current++,
      idDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newData]);
  };

  const onDelete = (targetId) => {
    // setTodos(todos.filter((item) => item.id !== targetId));
    dispatch({
      type: "delete",
      targetId: targetId,
    });
  };

  const onEdit = (targetId, content) => {
    // setTodos(todos.map((item) => (item.id === targetId ? { ...item, content: content } : item)));
    dispatch({
      type: "edit",
      targetId: targetId,
      content: content,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor2 onCreate={onCreate} />
      <List2 todos={todos} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
