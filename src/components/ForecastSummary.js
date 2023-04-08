import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, icon, temperature, description } = props;
  const formattedDate = new Date(date).toDateString();
  const weatherCode = icon.slice(0, 1) * 100;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary_date">{formattedDate}</div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt={weatherCode} />
      </div>
      <div className="forecast-summary_temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary_description">{description}</div>
    </div>
  );
}

export default ForecastSummary;
