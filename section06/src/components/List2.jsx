import TodoItem2 from "./TodoItem2";
import { useState, useMemo } from "react";

const List2 = ({ todos, onUpdate, onDelete, onEdit }) => {
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
  const filterdTodos = getFilteredData();

  // const getAnalyzedData = () => {};

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); //depth의값이 바뀌었을때 콜백함수 다시 실행.

  return (
    <div className="list-wrap">
      <div>total:{totalCount}</div>
      <div>done:{doneCount}</div>
      <div>notdone:{notDoneCount}</div>
      <div className="search-wrap">
        <input type="text" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      </div>
      <div className="list">
        {filterdTodos.map((todo) => {
          return <TodoItem2 key={todo.id} {...todo} onDelete={onDelete} onEdit={onEdit} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
};
export default List2;
