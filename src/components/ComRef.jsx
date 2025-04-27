// import React, { forwardRef } from 'react';

// const ComRef = forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       style={{
//         background: "yellow",
//         padding: 10,
//         marginBottom: 15,
//       }}
//     >
//       <h1>Get me by Ref!</h1>
//     </div>
//   );
// });

// export default ComRef;

// react 19
import React from "react";

const ComRef = ({ ref }) => (
  <div
    ref={ref}
    style={{ background: "yellow", padding: 10, marginBottom: 15 }}
  >
    <h1>Get me by Ref!</h1>
  </div>
);

export default ComRef;
