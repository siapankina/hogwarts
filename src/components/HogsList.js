import React, { Component } from "react";

import Nav from "./Nav";
import Hog from "./Hog";

class HogsList extends Component {
  Base_URL = "http://localhost:3000/hogs";

  constructor() {
    super();
    this.state = {
      hogs: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/hogs")
      .then(resp => resp.json())
      .then(data => this.setState({ hogs: data }));
  }

  sortHogs = () => {
    if (this.props.sortByName) {
      return this.state.hogs.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (this.props.sortByWeight) {
      return this.state.hogs.sort((a, b) => b.weight - a.weight);
    }
    return this.state.hogs;
  };

  render() {
    return (
      <div className="ui grid container">
        {this.sortHogs()
          .filter(hog => (this.props.filterGreased ? !hog.greased : true))
          .map(hog => (
            <Hog showHog={hog} />
          ))}
      </div>
    );
  }
}

export default HogsList;
