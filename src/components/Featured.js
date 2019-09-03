import React from "react";

const Featured = ({ featured, toggleFeatured, gameID }) => (
  <span>
    {featured ? (
      <a
        onClick={() => toggleFeatured(gameID)}
        className="ui right yellow corner label">
        <i className=" star icon"></i>
      </a>
    ) : (
      <a
        onClick={() => toggleFeatured(gameID)}
        className="ui right corner label">
        <i className="empty star icon"></i>
      </a>
    )}
  </span>
);

export default Featured;
