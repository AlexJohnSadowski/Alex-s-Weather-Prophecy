import React from "react";

import Card from "./Card";

const Cards = () => {
  return (
    <div>
      <div className="weather__days">
        <Card m={1} />
        <Card m={2} />
        <Card m={3} />
        <Card m={4} />
        <Card m={5} />
      </div>
    </div>
  );
};

export default Cards;
