import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchMonster: "",
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsters) =>
        this.setState({
          monsters,
        })
      )
      .catch((e) => console.log(e));
  }

  render() {
    const { monsters, searchMonster } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchMonster.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={(e) => this.setState({ searchMonster: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
