import React from "react";
import GamesList from "./GamesList";

const games = [
  {
    id: 1,
    price: "$25.99",
    name: "first game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 2,
    price: "$22.99",
    name: "second game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 3,
    price: "$24.99",
    name: "third game",
    players: "2-4",
    time: "3-6min"
  }
];

const App = () => (
  <div className="ui containter">
    <GamesList data={games} />
  </div>
);

export default App;
