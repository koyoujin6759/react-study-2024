import TodoItem2 from "./TodoItem2";
import { useActionState, useState } from "react";

const List2 = ({ todos, onDelete }) => {
  return (
    <div className="list-wrap">
      <div className="search-wrap">
        <input type="text" placeholder="검색어를 입력하세요" />
      </div>
      <div className="list">
        {todos.map((todo) => {
          return <TodoItem2 {...todo} key={todo.id} onDelete={onDelete} />;
          //데이터는 배열형태인데 todoitem2는 map함수로 반복돌려줄거라서 스프레드연산자로 데이터를넘긴다.
        })}
      </div>
    </div>
  );
};
export default List2;
