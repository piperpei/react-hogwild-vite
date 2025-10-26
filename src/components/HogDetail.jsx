import React from "react";

const HogDetail = ({ hog }) => {
  return (
    <div className="hogDetails">
      <p>Specialty: {hog.specialty}</p>
      <p>{hog.weight}</p>
      <p>{hog.greased ? "Greased" : "Nongreased"}</p>
      <p data-testid="hog-medal">
        <span>{hog["highest medal achieved"]}</span>
      </p>
    </div>
  );
};

export default HogDetail;