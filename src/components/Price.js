import React from "react";

const Price = ({ price }) => (
  <span>
    ${price / 100} {price < 3000 && "!"}
  </span>
);

export default Price;
