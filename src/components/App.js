import React from "react";
import GamesList from "./GamesList";
import GameForm from "./GameForm";

const games = [
  {
    id: 1,
    img:
      "https://ae01.alicdn.com/kf/HTB1T5uoQpXXXXctXVXXq6xXFXXXx/-.jpg_640x640.jpg",
    featured: false,
    price: 2599,
    visible: false,
    name: "Bfirst game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 2,
    img:
      "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/135376583/7eff5fb88c2dc46e167310922e461cc7.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=d215d569f2522c0e36ab1fa819eec8b6",
    featured: false,
    price: 4299,
    visible: false,
    name: "Csecond game",
    players: "2-4",
    time: "3-6min"
  },
  {
    id: 3,
    img:
      "https://ae01.alicdn.com/kf/HTB1sJlXe3aTBuNjSszfq6xgfpXaI/2018-Classic-Solid-Scrunch-Butt-Thong-Bikini-Triangle-Top-Women-Swimwear-Female-Brazilian-String-Swimsuit-Sexy.jpg",
    featured: true,
    price: 3499,
    visible: false,
    name: "Dthird game",
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

  toggleFeatured = gameID => {
    const newGames = this.state.games.map(game => {
      if (game.id === gameID) return { ...game, featured: !game.featured };
      return game;
    });
    this.setState({ games: newGames });
  };

  showHint = gameID => {
    const changedVisibility = this.state.games.map(game => {
      if (game.id === gameID) return { ...game, visible: !game.visible };
      return game;
    });
    this.setState({ games: changedVisibility });
  };

  render() {
    return (
      <div className="ui containter">
        <GameForm />
        <br />
        <GamesList
          data={this.state.games}
          toggleFeatured={this.toggleFeatured}
          showHint={this.showHint}
        />
      </div>
    );
  }
}

export default App;
