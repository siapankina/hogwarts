import React, { Component } from "react";
import HogInfo from "./HogInfo";

class Hog extends Component {
  state = {
    showing: false
  };

  getImg() {
    let image = require(`../hog-imgs/${this.props.showHog.name
      .split(" ")
      .join("_")
      .toLowerCase()}.jpg`);
    return image;
  }

  onShowHogInfo = () => {
    this.setState({ showing: !this.state.showing });
  };

  // ANOTHER OPTION TO SHOW INFO///////

  //   getinfocomponent() {
  //     if (this.state.showing === true) {
  //       return <HogInfo />;
  //     }

  //     return null;
  //   }

  render() {
    return (
      <div className="ui eight wide column">
        <img src={this.getImg()} onClick={this.onShowHogInfo}></img>
        <h5>{this.props.showHog.name}</h5>
        {/* {this.getinfocomponent()} */}
        {this.state.showing ? <HogInfo hogInfo={this.props.showHog} /> : null}
      </div>
    );
  }
}

export default Hog;
