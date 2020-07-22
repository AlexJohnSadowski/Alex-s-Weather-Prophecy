import React from "react";
import moment from "moment";

import Card from './Card'


const cards = ({ details }) => (
  <div>
    <div className="weather__days">
      <Card details={details} m={1} />
      <Card details={details} m={2} />
      <Card details={details} m={3} />
      <Card details={details} m={4} />
      <Card details={details} m={5} />
    </div>
  </div>
);

export default cards;
