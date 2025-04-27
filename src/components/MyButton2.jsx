import React, { useRef } from "react";

const MyButton2 = () => {
  const refCount = useRef(0);

  const refDom = useRef(null);

  const handleClick = () => {
    if (!refDom.current) return;
    console.log("[ref]", refDom.current);
    const elem = refDom.current;
    elem.style.color = "red";
  };

  return (
    <>
      <div
        ref={refDom}
        style={{
          background: "yellow",
          padding: 10,
          marginBottom: 15,
        }}
      >
        <h1>Get me by Ref!</h1>
      </div>
      <button onClick={handleClick}> Ref Click test </button>
    </>
  );
};

export default MyButton2;
