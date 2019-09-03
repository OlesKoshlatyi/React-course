import React from "react";
import GamesList from "./GamesList";

const games = [
  {
    id: 1,
    featured: false,
    price: 2599,
    name: "Bfirst game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 2,
    featured: false,
    price: 4299,
    name: "Csecond game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 3,
    featured: true,
    price: 3499,
    name: "Athird game",
    players: "2-4",
    time: "3-6min"
  }
];

class App extends React.Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
  }

  sortGames(games) {
    return games.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
  }

  toggleFeatured(gameID) {
    this.setState({ games: this.sortGames() });
  }

  render() {
    return (
      <div className="ui containter">
        <GamesList
          data={this.state.games}
          toggleFeatured={this.toggleFeatured}
        />
      </div>
    );
  }
}

export default App;
