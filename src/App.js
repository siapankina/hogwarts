import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HogsList from "./components/HogsList";

class App extends Component {
  state = {
    showingGreased: false,
    sortByName: false,
    sortByAge: false
  };

  toggleGreased = () => {
    this.setState({ showingGreased: !this.state.showingGreased });
  };

  nameSorting = () => {
    this.setState({ sortByName: true, sortByWeight: false });
  };

  weightSorting = () => {
    this.setState({ sortByWeight: true, sortByName: false });
  };
  render() {
    return (
      <div className="App">
        <Nav
          filterGreased={this.state.showingGreased}
          toggleGreased={this.toggleGreased}
          sortByName={this.state.sortByName}
          nameSorting={this.nameSorting}
          sortByWeight={this.state.sortByWeight}
          weightSorting={this.weightSorting}
        />
        <HogsList
          filterGreased={this.state.showingGreased}
          sortByName={this.state.sortByName}
          sortByWeight={this.state.sortByWeight}
        />
      </div>
    );
  }
}

export default App;
