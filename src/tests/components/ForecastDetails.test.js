import React from "react";
import { getByText, render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    description: "stubDescription",
    icon: "800",
    temperature: {
      min: 10,
      max: 99,
    },
    wind: {
      speed: 10,
      direction: "stubDirection",
    },
  };
  it("renders and matches snapshot", () => {
    const { asFragment } = render(
      <div className="forecast-details">
        <p>Date is {validProps.date}</p>
        <p>description is {validProps.description}</p>
        <p>icon is {validProps.icon}</p>
        <p>temperatureMax is {validProps.temperature.max}</p>
        <p>temperatureMin is {validProps.temperature.min}</p>
        <p>windSpeed is {validProps.wind.speed}</p>
        <p>windDirection is {validProps.wind.direction}</p>
      </div>
    );
    expect(asFragment).toMatchSnapshot();
  });
});
