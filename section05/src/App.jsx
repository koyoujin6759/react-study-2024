import { useState, useRef } from "react";
import Editor2 from "./components/Editor2";
import List2 from "./components/List2";
import "./App.css";

const mockData = [
  {
    id: 0,
    content: "공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    content: "청소하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: "빨래하기",
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mockData);
  const onCreate = (content) => {
    const newTodo = {
      id: 0,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  const onEdit = (targetId, newContent) => {
    setTodos(todos.map((todo) => (targetId === todo.id ? { ...todo, content: newContent } : todo)));
  };
  return (
    <div className="App">
      <Editor2 onCreate={onCreate} />
      <List2 todos={todos} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
