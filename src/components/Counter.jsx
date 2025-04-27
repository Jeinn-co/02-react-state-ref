// rafece
import React, { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [count, setCount] = useState(0)
  
  console.log('[count-out]',count)

  return (
    <>
      <h3>Counter = {count}</h3>
      <button
        onClick={() => {
          // count += 1
          setCount(count+ 1)
          console.log('[count]','clicked')
          console.log('[count-in]',count) // got old value.
        }}
      >
        add count
      </button>
    </>
  );
};

export default Counter;
