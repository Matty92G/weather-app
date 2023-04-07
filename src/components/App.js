// import logo from "./logo.svg";
import React from "react";
import "../styles/App.css";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";

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
  return (
    <div className="weather-app">
      <div className="forecast">
        <LocationDetails city={location.city} country={location.country} />

        <ForecastSummaries forecasts={forecasts} />
      </div>
    </div>
  );
}

export default App;
