require("dotenv").config();

export const api = {
  key: process.env.REACT_APP_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};
