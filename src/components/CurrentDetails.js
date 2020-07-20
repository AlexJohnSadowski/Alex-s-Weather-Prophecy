import React from "react";

const CurrentDetails = ({ details }) => (
  <div className="weather">
    <div className="detail">
      Morning: {Math.round(details.daily[0].temp.morn)}°c
    </div>
    <div className="detail">Day: {Math.round(details.daily[0].temp.day)}°c</div>
    <div className="detail">
      Night: {Math.round(details.daily[0].temp.night)}°c
    </div>
    <div className="detail">Humidity: {details.daily[0].humidity}%</div>
  </div>
);

export default CurrentDetails;
