import React, { useRef } from "react";
import ComRef from "./ComRef";

const MyButton3 = () => {
  // const refCount = useRef(0);
  const refDom = useRef(null);

  const handleClick = () => {
    if (!refDom.current) return;
    console.log("[ref]", refDom.current);
    const elem = refDom.current;
    elem.style.color = "red";
  };

  return (
    <>
      <ComRef ref={refDom} />
      <button onClick={handleClick}> Ref Click test </button>
    </>
  );
};

export default MyButton3;
