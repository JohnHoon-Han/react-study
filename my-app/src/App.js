import { useState, useEffect } from "react";


function Hello() {
  function fn() {
    console.log("fn sample..");
    // NOTE RETURN 함수는 해당 fn 삭제될 때 실행된다. 
    return () => console.log("destroy:(");
  }
  useEffect(fn, []);
  return <h1>Hello Txt!</h1>;
}
function App() {
  const [flag, setValue] = useState(false);
  const onClick = () => setValue(!flag);
  useEffect(() => {
    console.log("effect on!");
  }, [])

  return (
    <div className="App">
      <button onClick={onClick}>{ flag ? "Show" : "Hide"}</button>
      { flag ? <Hello /> : null }
    </div>
  );
}

export default App;
