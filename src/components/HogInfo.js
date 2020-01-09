import React, { Component } from "react";

class HogInfo extends Component {
  render() {
    const { name, specialty, greased, weight } = this.props.hogInfo;
    return (
      <div>
        <ul>
          <li>Specialty: {specialty}</li>
          <li>Greased: {greased.toString()}</li>
          <li>Weight: {weight}</li>
          <li>
            Highest medal achieved:
            {this.props.hogInfo["highest medal achieved"]}
          </li>
        </ul>
      </div>
    );
  }
}

export default HogInfo;
