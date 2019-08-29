import React from "react";

const GameCard = () => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribon label">$32.99</span>
      <img
        src="https://www.hearthstonetopdecks.com/wp-content/uploads/2018/03/baku-the-mooneater-hd-300x429.png"
        alt="Game Cover"
      />
    </div>
    <div className="content">
      <a href="#" className="header">
        Quadropolis
      </a>
      <div className="meta">
        <i className="icon users" /> 2-4&nbsp;
        <i className="icon wait" /> 60min.
      </div>
    </div>
  </div>
);

export default GameCard;
