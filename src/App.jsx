import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
// import MyTitle from "./components/MyTitle";
// import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <h1> hello </h1>
      <button> click me! </button> */}
      {/* <MyTitle userName="John">
        <div style={{ color: "lightgreen" }}>children content</div>
      </MyTitle>*/}
      <MyButton></MyButton> 
      {/* <Counter/> */}
    </>
  );
}

export default App;
