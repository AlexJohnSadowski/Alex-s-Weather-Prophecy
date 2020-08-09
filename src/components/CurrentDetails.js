import React, { useContext } from "react";
import  { WeatherContext } from "../context/MyContext";

const CurrentDetails = () => {
  const { details } = useContext(WeatherContext);
  return (
    <div className="weather">
      <div className="detail">
        Morning: {Math.round(details.daily[0].temp.morn)}°c
      </div>
      <div className="detail">
        Day: {Math.round(details.daily[0].temp.day)}°c
      </div>
      <div className="detail">
        Night: {Math.round(details.daily[0].temp.night)}°c
      </div>
      <div className="detail">Humidity: {details.daily[0].humidity}%</div>
    </div>
  );
};

export default CurrentDetails;
