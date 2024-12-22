import { useReducer } from "react";

//reducer 변환기
//상태를 실제로 변화시키는 변환기역할
function reducer(state, action) {
  //   if (action.type === "increase") {
  //     return state + action.data;
  //   } else if (action.type === "decrease") {
  //     return state - action.data;
  //   }
  switch (action.type) {
    case "increase":
      return state + action.data;
    case "decrease":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0); //0은 초기값
  const onClickPlus = () => {
    //상태가 어떻게 변화되길 원하는지 dispatch함수 호출
    dispatch({
      type: "increase",
      data: 1,
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: "decrease",
      data: 1,
    });
  };
  return (
    <>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </>
  );
};
export default Exam;
