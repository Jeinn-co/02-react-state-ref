import React, { useEffect, useRef, useState } from "react";

const MyButton = () => {
  const refCount = useRef(0);
  const [bolVal, setBolVal] = useState(false);

  console.log("[refCount-out]", refCount.current);

  console.log("[out-side]", "executed!");

  useEffect(() => {
    console.log("[useEffect]", "effect 開始");

    return () => {
      console.log("[useEffect]", "clean 清理");
    };
    // }, [refCount.current]);
  }, []);

  console.log("[out-side]", "executed! II");

  const handleClick = () => {
    refCount.current += 1;
    console.log("[refCount]", refCount.current);
    console.log("[button]", "clicked");
    setBolVal(!bolVal);
  };

  return (
    <>
      {console.log("[render]: draw button")}
      <button onClick={handleClick}> click me! </button>
    </>
  );
};

export default MyButton;
