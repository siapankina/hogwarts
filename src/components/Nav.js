import piggy from "../porco.png";
import React from "react";

const Nav = ({ filterGreased, toggleGreased, nameSorting, weightSorting }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      {filterGreased ? (
        <button onClick={toggleGreased}>Show All Hogs</button>
      ) : (
        <button onClick={toggleGreased}>Show not Greased hogs</button>
      )}
      <button onClick={nameSorting}>Sort by name</button>
      <button onClick={weightSorting}>Sort by weight</button>
    </div>
  );
};

export default Nav;
