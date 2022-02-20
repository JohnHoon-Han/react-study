
import Btn from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={ styles.title }>Hello World! </h1>
      <Btn text="new btn!" />
    </div>
  );
}

export default App;
