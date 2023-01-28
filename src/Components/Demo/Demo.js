import React from "react";

const Demo = (props) => {
  console.log("Demo.js");
  return <p>{props.show ? "This is new " : ""}</p>;
};

export default React.memo(Demo);
