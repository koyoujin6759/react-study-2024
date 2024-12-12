import { useState, useRef } from "react";
import Editor2 from "./components/Editor2";
import List2 from "./components/List2";
import "./App.css";

const mockData = [
  {
    id: 0,
    content: "공부하기",
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 1,
    content: "설거지하기",
    isDone: false,
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: "운동하기",
    isDone: false,
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      isDone: false,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onEdit = (targetId, editContent) => {
    setTodos(todos.map((todo) => (targetId === todo.id ? { ...todo, content: editContent } : todo)));
  };

  return (
    <div className="App">
      <Editor2 onCreate={onCreate} />
      <List2 todos={todos} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
