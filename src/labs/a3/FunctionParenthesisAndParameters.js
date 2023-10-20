import React from "react";

function FunctionParenthesisAndParameters() {
    const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
  return (
    <>
      <h3>FunctionParenthesisAndParameters</h3>
      square(3) = {square(3)}
      <br />
      plusOne(2) = {plusOne(2)}
      <br />
      twoSquared = {twoSquared}
      <br />
      threePlusOne = {threePlusOne}
      <br />
    </>
  );
}

export default FunctionParenthesisAndParameters