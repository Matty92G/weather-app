import React from "react";

function ForecastDetails({ forecasts }) {
  return (
    <div className="forecast-details">
      <p>Date is {forecasts.date}</p>
      <p>description is {forecasts.description}</p>
      <p>icon is {forecasts.icon}</p>
      <p>temperatureMax is {forecasts.temperature.max}</p>
      <p>temperatureMin is {forecasts.temperature.min}</p>
      <p>windSpeed is {forecasts.wind.speed}</p>
      <p>windDirection is {forecasts.wind.direction}</p>
      {/* //   key={forecast.date}
        //   date={forecast.date}
        //   description={forecast.description}
        //   icon={forecast.icon}
        //   temperatureMax={forecast.temperature.max}
        //   temperatureMin={forecast.temperature.min}
        //   windSpeed={forecast.wind.speed}
        //   windDirection={forecast.wind.direction} */}
    </div>
  );
}

export default ForecastDetails;
