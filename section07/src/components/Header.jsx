import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은😆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// const memoizedHeader = memo(Header); //렌더링되지않는 최적화
// export default memo(Header);
export default Header;
