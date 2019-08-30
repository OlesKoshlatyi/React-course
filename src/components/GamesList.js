import React from "react";
import GameCard from "./GameCard";

const GamesList = ({ data }) => (
  <div className="ui three cards">
    {data.map(i => (
      <GameCard game={i} key={i.id} />
    ))}
  </div>
);
export default GamesList;
