import React, { useEffect, useRef, useState } from "react";

const MyButton = () => {
  const refCount = useRef(0);
  const [bolVal, setBolVal] = useState(false);

  console.log("[refCount-out]", refCount.current);

  useEffect(() => {
    console.log("[useEffect]", "effect 開始");

    return () => {
      console.log("[useEffect]", "clean 清理");
    };
  // }, [refCount.current]);
  }, []);

  const handleClick = () => {
    refCount.current += 1;
    console.log("[refCount]", refCount.current);
    console.log("[button]", "clicked");
    setBolVal(!bolVal);
  };

  return <button onClick={handleClick}> click me! </button>;
};

export default MyButton;
