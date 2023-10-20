import React from "react";
import multiply from "./multiply";

function ImpliedReturn() {
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  return (
    <>
      <h3>ImpliedReturn</h3>
      fourTimesFive = {fourTimesFive}
      <br />
      multiply(3, 1) = {multiply(3, 1)}
      <br />
    </>
  );
}
export default ImpliedReturn;
