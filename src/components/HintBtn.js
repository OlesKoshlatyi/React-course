import React from "react";

const HintBtn = ({ gameID, showHint }) => (
  <div>
    <i
      className="top right corner eye icon"
      onClick={() => showHint(gameID)}></i>
  </div>
);

export default HintBtn;
