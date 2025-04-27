// rafece
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("[count-out]", count);

  return (
    <>
      <h3>Counter = {count}</h3>
      <button
        onClick={() => {
          // setCount(count+ 1)
          setCount((prev) => {
            const state = prev + 1;
            console.log("[count-in]", state);
            return state;
          });
          console.log("[count]", "clicked");
        }}
      >
        add count
      </button>
    </>
  );
};

export default Counter;
