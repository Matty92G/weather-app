import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

// function ForecastSummaries({ forecasts }) {
//   return <div className="forecast-summaries">
//     {forecasts.map((forecast) => (
//       <ForecastSummary
//         key={forecast.date}
//         date={forecast.date}
//         description={forecast.description}
//         icon={forecast.icon}
//         temperature={forecast.temperature}
//       />
//     ))}
//   </div>
// }

function ForecastSummaries({ forecasts, onForecastSelect }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon.toString()}
          onSelect={onForecastSelect}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}
export default ForecastSummaries;
