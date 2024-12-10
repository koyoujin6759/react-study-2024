import { useState, useRef } from "react";

import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  //임시데이터
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
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

function App() {
  const idRef = useRef(3);
  const [todos, setTodos] = useState(mockData);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    //todos state의 값들 중에 targetid와 일치하는 id를 갖는 투두아이템의 isdone변경

    //인수: todos배열에서 targetid와 일치하는 I열값을 갖는 요소의 데이터만 바꾼 새로운배열
    setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const onDelete = (targetId) => {
    //인수 : todos 배열에서 targetid와 일치하는 id를 갖는 요소를 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onEdit = (targetId) => {
    setTodos(todos.map((todo) => {}));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
