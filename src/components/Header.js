import React, {useContext} from "react";
import { WeatherContext } from "../context/MyContext";

const Header = () => {
  const { setQuery, query, search } = useContext(WeatherContext);
  return (
    <>
      <div className="title">Alex's Weather Prophecy</div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a city..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
    </>
  );
};

export default Header;
