import React from "react";
import { useRef, useEffect, useState } from "react";



const MyButton = () => {
  const count = useRef(0);
  const [isState, setIsState] = useState(false)

  const handleClick = () => {
    count.current += 1;
    console.log('[count]', count.current)
    console.log("clicked");
    setIsState(!isState)
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
