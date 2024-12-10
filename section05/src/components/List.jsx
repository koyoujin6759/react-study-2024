import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🍀</h4>
      <input type="text" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="Todos_wrapper">
        {filteredTodos.map((todo) => {
          //map함수 안에 콜백함수
          // return <div>{todo.content}</div>;
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};
export default List;
