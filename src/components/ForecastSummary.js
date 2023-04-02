import React from "react";

function ForecastSummary(props) {
  const { date, icon, temperature, description } = props;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        {icon}
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
