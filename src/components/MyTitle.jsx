// rafece
import React from "react";

const MyTitle = (props) => {
  // console.log("[props]", props);
  const { userName } = props;
  // console.log("[userName]", userName);

  return <h1> hello, {userName} </h1>;
};

export default MyTitle;
