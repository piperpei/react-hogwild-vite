import React, { useState } from "react";
import HogDetail from "./HogDetail";

const HogCard = ({ hog, onHide = () => {} }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => setShowDetails((prev) => !prev);

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <h3>{hog.name}</h3>
      <img
        src={hog.image}
        alt={`Photo of ${hog.name}`}
        style={{ width: "100%" }}
      />
      {showDetails && <HogDetail hog={hog} />}
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          onHide(hog.name);
        }}
      >
        Hide Me
      </button>
    </div>
  );
};

export default HogCard;