import React, { Component } from "react";
import { api } from "../components/API";

const WeatherContext = React.createContext();

class WeatherProvider extends Component {
  setQuery = query => {
    this.setState({ query });
  };

  state = {
    query: "",
    weather: {},
    details: {},
    mean: "",
    mode: "",
    setQuery: this.setQuery
  };

  search = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const forecastResponse = await fetch(
          `${api.base}forecast?q=${this.state.query}&units=metric&APPID=${api.key}`
        );
        const forecastResult = await forecastResponse.json();
        this.setState({ weather: forecastResult });
        this.setState({ query: "" });
        // console.log(forecastResult);

        const onecallResponse = await fetch(
          `${api.base}onecall?lat=${forecastResult.city.coord.lat}&lon=${forecastResult.city.coord.lon}&units=metric&APPID=${api.key}`
        );
        const onecallResult = await onecallResponse.json();
        this.setState({ details: onecallResult });
        console.log(onecallResult);

        // calling functions
        this.meanValue(onecallResult);
        this.modeValue(onecallResult);
      } catch (e) {
        console.error(e);
      }
    }
  };

  meanValue(onecallResult) {
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

    this.setState({ mean: sum });
  }

  modeValue(onecallResult) {
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

    for (let i = 0; i < list.length; i++) {
      let single = list[i];
      let total = list.lastIndexOf(single) - list.indexOf(single) + 1;

      if (total > mostFrequent) {
        mostFrequentItem = list[i];
        mostFrequent = total;
        i = list.lastIndexOf(single) + 1;
      }
    }

    // console.log(mostFrequentItem);
    this.setState({ mode: mostFrequentItem });
  }

  

  render() {
    return (
      <WeatherContext.Provider
        value={{
          ...this.state,
          search: this.search,
          meanValue: this.meanValue,
          ModeValue: this.modeValue,
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

const WeatherConsumer = WeatherContext.Consumer;

export { WeatherConsumer, WeatherContext };

export default WeatherProvider;
