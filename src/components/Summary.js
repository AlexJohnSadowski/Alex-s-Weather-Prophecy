import React from "react";

const Summary = ({ mean, mode }) => {
  return (
    <div className="summary">
      <div className="summary__info">Mode value for the upcoming 24 hours - {mode}°c</div>
      <div className="summary__info">
        Average temperature for the upcoming 5 days - {Math.round(mean)}°c
      </div>
    </div>
  );
};

export default Summary;
