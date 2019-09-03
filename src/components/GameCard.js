import React from "react";
import Price from "./Price";
import Featured from "./Featured";

const GameCard = ({ game, toggleFeatured }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribon label">
        <Price price={game.price} />
      </span>
      <Featured
        featured={game.featured}
        toggleFeatured={toggleFeatured}
        gameID={game.id}
      />
      <img
        src="https://www.hearthstonetopdecks.com/wp-content/uploads/2018/03/baku-the-mooneater-hd-300x429.png"
        alt="Game Cover"
      />
    </div>
    <div className="content">
      <a className="header">{game.name}</a>
      <div className="meta">
        <i className="icon users" />
        {game.players}
        <i className="icon wait" /> {game.time}
      </div>
    </div>
  </div>
);

export default GameCard;
