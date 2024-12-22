import TodoItem2 from "./TodoItem2";
import { useState, useMemo } from "react";

const List2 = ({ todos, onDelete, onEdit }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
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
    <div className="list-wrap">
      <div className="search-wrap">
        <input type="text" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      </div>
      <div className="list">
        {filteredTodos.map((todo) => {
          return <TodoItem2 key={todo.id} {...todo} onDelete={onDelete} onEdit={onEdit} />;
        })}
      </div>
    </div>
  );
};
export default List2;
