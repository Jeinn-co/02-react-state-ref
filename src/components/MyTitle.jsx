// rafece
import React from "react";

const MyTitle = (props) => {
  // console.log("[props]", props);
  const { userName, children } = props;
  // console.log("[userName]", userName);

  return (
    <h1>
      hello, {userName} <br />
      {children}
    </h1>
  );
};

export default MyTitle;
