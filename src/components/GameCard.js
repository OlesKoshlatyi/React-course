import React from "react";
import Price from "./Price";
import Featured from "./Featured";
import HintBtn from "./HintBtn";
import Hint from "./Hint";

const GameCard = ({ game, toggleFeatured, showHint }) => (
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
      {game.visible ? <Hint /> : <img src={game.img} alt="Game Cover" />}
    </div>
    <div className="content">
      <a className="header">{game.name}</a>
      <div className="meta">
        <i className="icon users" />
        {game.players}
        <i className="icon wait" /> {game.time}
      </div>
      <HintBtn gameID={game.id} showHint={showHint} />
    </div>
  </div>
);

export default GameCard;
