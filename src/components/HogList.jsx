import React from "react";
import HogCard from "./HogCard";

const HogList = ({ hogs, onHideHog }) => {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div key={hog.name} className="ui eight wide column">
          <HogCard hog={hog} onHide={onHideHog} />
        </div>
      ))}
    </div>
  );
};

export default HogList;