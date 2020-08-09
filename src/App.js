import React, { useContext } from "react";

import {WeatherContext} from "./context/MyContext";

import Cards from "./components/Cards";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

const App = () => {
  
  const { weather, details } = useContext(WeatherContext);

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
        <Header />
        {typeof details.current != "undefined" && (
          <>
            <CurrentWeather />
            <Cards />
            <Summary />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
