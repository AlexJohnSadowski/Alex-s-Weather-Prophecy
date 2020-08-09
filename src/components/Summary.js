import React, {useContext} from "react";
import  { WeatherContext } from "../context/MyContext";

const Summary = () => {
  const { mean, mode } = useContext(WeatherContext);
  return (
    <div className="summary">
      <div className="summary__info">Mode value for the upcoming 24 hours: {mode}°c</div>
      <div className="summary__info">
        Average temperature for the upcoming 5 days: {Math.round(mean)}°c
      </div>
    </div>
  );
};

export default Summary;
