import { useState, useRef } from "react";
import List2 from "./components/List2";
import Editor2 from "./components/Editor2";
import "./App.css";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "할일1",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "할일2",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "할일3",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const isRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: isRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Editor2 onCreate={onCreate} />
      <List2 todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
