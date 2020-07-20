import React from "react";
import moment from "moment";

const cards = ({ details }) => (
  <div>
    <div className="weather__days">
      <div className="card">
        <div className="flex">
          <div className="card-time">Tomorrow</div>
          <div
            className={
              typeof details.daily[1].weather[0].main != "undefined"
                ? details.daily[1].clouds > 50
                  ? "icon--cloud"
                  : "icon--sun"
                : "icon--sun"
            }
          />
          <div className="detail--icon">
            Morning: {Math.round(details.daily[1].temp.morn)}°c
          </div>
          <div className="detail--icon">
            Day: {Math.round(details.daily[1].temp.day)}°c
          </div>
          <div className="detail--icon">
            Night: {Math.round(details.daily[1].temp.night)}°c
          </div>
          <div className="detail--icon">
            Humidity: {details.daily[1].humidity}%
          </div>
          <div className="detail--icon">
            Temp.min: {Math.round(details.daily[1].temp.min)}°c
          </div>
          <div className="detail--icon">
            Temp.max: {Math.round(details.daily[1].temp.max)}°c
          </div>
          <div className="total"></div>
        </div>
      </div>
      <div className="card">
        <div className="flex">
          <div className="card-time">
            {" "}
            {moment().add(2, "days").format("dddd Do MMMM")}
          </div>
          <div
            className={
              typeof details.daily[2].weather[0].main != "undefined"
                ? details.daily[2].clouds > 50
                  ? "icon--cloud"
                  : "icon--sun"
                : "icon--sun"
            }
          />
          <div className="detail--icon">
            Morning: {Math.round(details.daily[2].temp.morn)}°c
          </div>
          <div className="detail--icon">
            Day: {Math.round(details.daily[2].temp.day)}°c
          </div>
          <div className="detail--icon">
            Night: {Math.round(details.daily[2].temp.night)}°c
          </div>
          <div className="detail--icon">
            Humidity: {details.daily[2].humidity}%
          </div>
          <div className="detail--icon">
            Temp.min: {Math.round(details.daily[2].temp.min)}°c
          </div>
          <div className="detail--icon">
            Temp.max: {Math.round(details.daily[2].temp.max)}°c
          </div>
        </div>
      </div>
      <div className="card">
        <div className="flex">
          <div className="card-time">
            {" "}
            {moment().add(3, "days").format("dddd Do MMMM")}
          </div>
          <div
            className={
              typeof details.daily[3].weather[0].main != "undefined"
                ? details.daily[3].clouds > 50
                  ? "icon--cloud"
                  : "icon--sun"
                : "icon--sun"
            }
          />
          <div className="detail--icon">
            Morning: {Math.round(details.daily[3].temp.morn)}°c
          </div>
          <div className="detail--icon">
            Day: {Math.round(details.daily[3].temp.day)}°c
          </div>
          <div className="detail--icon">
            Night: {Math.round(details.daily[3].temp.night)}°c
          </div>
          <div className="detail--icon">
            Humidity: {details.daily[3].humidity}%
          </div>
          <div className="detail--icon">
            Temp.min: {Math.round(details.daily[3].temp.min)}°c
          </div>
          <div className="detail--icon">
            Temp.max: {Math.round(details.daily[3].temp.max)}°c
          </div>
        </div>
      </div>
      <div className="card">
        <div className="flex">
          <div className="card-time">
            {moment().add(4, "days").format("dddd Do MMMM")}
          </div>
          <div
            className={
              typeof details.daily[1].weather[0].main != "undefined"
                ? details.daily[4].clouds > 50
                  ? "icon--cloud"
                  : "icon--sun"
                : "icon--sun"
            }
          />
          <div className="detail--icon">
            Morning: {Math.round(details.daily[4].temp.morn)}°c
          </div>
          <div className="detail--icon">
            Day: {Math.round(details.daily[4].temp.day)}°c
          </div>
          <div className="detail--icon">
            Night: {Math.round(details.daily[4].temp.night)}°c
          </div>
          <div className="detail--icon">
            Humidity: {details.daily[4].humidity}%
          </div>
          <div className="detail--icon">
            Temp.min: {Math.round(details.daily[4].temp.min)}°c
          </div>
          <div className="detail--icon">
            Temp.max: {Math.round(details.daily[4].temp.max)}°c
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default cards;
