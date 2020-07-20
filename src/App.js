import React, { useState } from "react";

import Cards from "./components/Cards";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer"
import Summary from "./components/Summary"
import { api } from "./components/API"


function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [details, setDetails] = useState({});
  const [mean, setMean] = useState("");
  const [mode, setMode] = useState("");

  const search = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const forecastResponse = await fetch(
          `${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`
        );
        const forecastResult = await forecastResponse.json();
        setWeather(forecastResult);
        setQuery("");
        // console.log(forecastResult);

        const onecallResponse = await fetch(
          `${api.base}onecall?lat=${forecastResult.city.coord.lat}&lon=${forecastResult.city.coord.lon}&units=metric&APPID=${api.key}`
        );
        const onecallResult = await onecallResponse.json();
        setDetails(onecallResult);
        console.log(onecallResult);
        
        // calling functions
        MeanValue(onecallResult);
        ModeValue(onecallResult);
      } catch (e) {
        console.error(e);
      }
    }
  };

  function MeanValue(onecallResult) {
    let m = 0;
    let array = [];

    while (m < 5) {
      const a = onecallResult.daily[m].temp.min;
      const b = onecallResult.daily[m].temp.max;
      const c = (a + b) / 2;
      array.push(c);
      m++;
    }
    // console.log(array)

    const sum = array.reduce(function (a, b) {
      return a + b / 5;
    }, 0);

    setMean(sum);
  }

  function ModeValue(onecallResult) {
    let n = 0;
    let list = [];

    while (n < 24) {
      const Hourly = Math.round(onecallResult.hourly[n].temp);
      n++;
      list.push(Hourly);
    }
    console.log(list);

   let mostFrequent = null,
      mostFrequentItem;
    list.sort();

    for (var i = 0; i < list.length; i++) {
     let single = list[i];
     let total = list.lastIndexOf(single) - list.indexOf(single) + 1;

      if (total > mostFrequent) {
        mostFrequentItem = list[i];
        mostFrequent = total;
        i = list.lastIndexOf(single) + 1;
      }
    }

    // console.log(mostFrequentItem);
    setMode(mostFrequentItem);
  }

  return (
    <div
      className={
        typeof details.current != "undefined"
          ? weather.list[0].main.temp > 15
            ? "app warm"
            : "app cold"
          : "app"
      }
    >
      <main>
        <Header setQuery={setQuery} search={search} query={query} />
        {typeof details.current != "undefined" && (
          <>
            <CurrentWeather details={details} weather={weather} />
            <Cards details={details} />
            <Summary mean={mean} mode={mode} />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
