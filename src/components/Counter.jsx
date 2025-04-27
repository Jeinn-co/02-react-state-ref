// rafece
import React from "react";

const Counter = () => {
  let count = 0;

  console.log('[count-out]',count)

  return (
    <>
      <h3>Counter = {count}</h3>
      <button
        onClick={() => {
          count += 1
          console.log('[count]','clicked')
          console.log('[count-in]',count)
        }}
      >
        add count
      </button>
    </>
  );
};

export default Counter;
