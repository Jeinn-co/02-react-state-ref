import React from "react";
import { useRef, useEffect } from "react";

const MyButton = () => {
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    console.log('[count]', count.current)
    console.log("clicked");
  };

  useEffect(() => {
    console.log('[effect run]')
  })

  return (
    <>
      <h2>count: {count.current}</h2>
      <button onClick={handleClick}> click me! </button>
    </>
  );
};

export default MyButton;
