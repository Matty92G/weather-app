/* eslint-disable import/no-duplicates */
// import logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import "../styles/App.css";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";
import ForecastDetails from "./ForecastDetails";

// function App(props) {
//   return (
//     <div className="App">
//       <LocationDetails
//         city={props.location.city}
//         country={props.location.country}
//       />
//     </div>
//   );
// }

// function App(props) {
//   const { forecasts, location } = props;
//   return (
//     <div className="App">
//       <LocationDetails city={location.city} country={location.country} />
//       <ForecastSummaries forecasts={forecasts} />
//     </div>
//   );
// }

function App({ location, forecasts }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <div className="forecast">
        <LocationDetails city={location.city} country={location.country} />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        <ForecastDetails forecasts={selectedForecast} />
      </div>
    </div>
  );
}

export default App;
