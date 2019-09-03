import React from "react";
import GameCard from "./GameCard";
import InfoMsg from "./InfoMsg";

const info = {
  header: "ui red header",
  content: "",
  type: "icon warning"
};

const GamesList = ({ data, toggleFeatured, showHint }) => (
  <div className="ui five cards">
    {data.length === 0 ? (
      <InfoMsg source={info} />
    ) : (
      data.map(i => (
        <GameCard
          game={i}
          key={i.id}
          toggleFeatured={toggleFeatured}
          showHint={showHint}
        />
      ))
    )}
  </div>
);
export default GamesList;

GamesList.defaultProps = {
  data: []
};
