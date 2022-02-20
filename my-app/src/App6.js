
// import Btn from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1  );

  const [keyword, setKeyword] = useState("");

  const onKeyupEvent = (event) => setKeyword(event.target.value);

  // NOTE Effect 배열에 명시된 변수에 대한 로직은 실행하지 않지만 전체적인 랜더링 다시 이뤄짐

  console.log("App Load Success..!");

  useEffect(() => {
    console.log("effect on!");
  }, [])

  useEffect(() => {
    console.log("counter changeed! " + counter);
  }, [counter])

  useEffect(() => {
    console.log("keyword is " + keyword);
  }, [keyword])

  return (
    <div className="App">
      <input type="text" placeholder="Search keyword.." value={keyword} onChange={onKeyupEvent} />
      <h1  className={ styles.title }>{counter}</h1>
      <button onClick={onClick}>Btn</button>

    </div>
  );
}

export default App;
