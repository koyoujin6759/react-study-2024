import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";

//이미지를 assets에서 import 하는 방식은 이미지가 소수일때 /다수일때는 public scr방식
// import emotion1 from "./assets/emotion1.png";
import { getEmotionImage } from "./util/get-emotion-image";

//1. "/" : 모든 일기를 조회하는 home
//2. "/new" : 새로운 일기를 작성하는 페이지
//3. "/diary" : 일기를 상세히조회하는 페이지
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header title={"header"} leftChild={<Button text={"left"} />} rightChild={<Button text={"right"} />} />

      <div>
        <img src={getEmotionImage(1)} alt="" />
        <img src={getEmotionImage(2)} alt="" />
        <img src={getEmotionImage(3)} alt="" />
        <img src={getEmotionImage(4)} alt="" />
        <img src={getEmotionImage(5)} alt="" />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>new</button>

      <Button
        text={"123"}
        onClick={() => {
          console.log("hi");
        }}
      />
      <Button
        text={"123"}
        type={"positive"}
        onClick={() => {
          console.log("hi");
        }}
      />
      <Button
        text={"123"}
        type={"negative"}
        onClick={() => {
          console.log("hi");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
