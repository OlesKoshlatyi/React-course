import React from "react";
import GamesList from "./GamesList";

const games = [
  {
    id: 1,
    price: 2599,
    name: "first game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 2,
    price: 4299,
    name: "second game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 3,
    price: 3499,
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
