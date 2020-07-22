import React from 'react'
import moment from 'moment'

export default function Card({ details, m }) {
    return (
        <div className="card">
        <div className="flex">
          <div className="card-time">
            {" "}
            {moment().add(m, "days").format("dddd Do MMMM")}
          </div>
          <div
            className={
              typeof details.daily[m].weather[0].main != "undefined"
                ? details.daily[m].clouds > 50
                  ? "icon--cloud"
                  : "icon--sun"
                : "icon--sun"
            }
          />
          <div className="detail--icon">
            Morning: {Math.round(details.daily[m].temp.morn)}°c
          </div>
          <div className="detail--icon">
            Day: {Math.round(details.daily[m].temp.day)}°c
          </div>
          <div className="detail--icon">
            Night: {Math.round(details.daily[m].temp.night)}°c
          </div>
          <div className="detail--icon">
            Humidity: {details.daily[m].humidity}%
          </div>
          <div className="detail--icon">
            Temp.min: {Math.round(details.daily[m].temp.min)}°c
          </div>
          <div className="detail--icon">
            Temp.max: {Math.round(details.daily[m].temp.max)}°c
          </div>
        </div>
      </div>
    )
}
