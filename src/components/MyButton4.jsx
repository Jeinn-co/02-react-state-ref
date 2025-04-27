import React, { useState, useEffect, useRef } from "react";

const ValueTracker = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count); // 記錄上一次的值

  useEffect(() => {
    // console.log('[useEffect]', count)
    prevCount.current = count; // 每次 count 改變後，更新 prevCount
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>現在的值：{count}</h1>
      <h2>上一次的值：{prevCount.current}</h2>
      <button onClick={handleClick}>增加</button>
    </div>
  );
};

export default ValueTracker;
