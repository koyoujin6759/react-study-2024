import TodoItem2 from "./TodoItem2";
import { useState } from "react";

const List2 = ({ todos, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      todo.content.toLowerCase().includes(search.toLocaleLowerCase());
    });
  };

  const filterdTodos = getFilteredData();

  return (
    <div>
      <input type="text" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todo-wrapper">
        {/* {todos.map((todo) => {
          return <TodoItem2 key={todo.id} {...todo} onDelete={onDelete} />;
        })} */}
        {filterdTodos.map((todo) => {
          return <TodoItem2 key={todo.id} {...todo} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};
export default List2;
