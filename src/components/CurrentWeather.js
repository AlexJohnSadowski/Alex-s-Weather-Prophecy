import React, {useContext} from "react";
import moment from "moment";
import CurrentDetails from "./CurrentDetails";
import  { WeatherContext }from "../context/MyContext";

const CurrentWeather = () => {
  const { details, weather } = useContext(WeatherContext);
  return (
    <div>
      <div className="city-box">
        <div className="city">
          {weather.city.name}, {weather.city.country}
        </div>
        <div className="date">{moment().calendar()}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          Min.temp.
          <div className="minitemp">
            {Math.round(details.daily[0].temp.min)}°c
          </div>
        </div>
        <div className="main-temp">{Math.round(details.current.temp)}°c</div>
        <div className="temp">
          Max.temp.
          <div className="minitemp">
            {Math.round(details.daily[0].temp.max)}°c
          </div>
        </div>
        <CurrentDetails details={details} />
      </div>
    </div>
  );
};

export default CurrentWeather;
