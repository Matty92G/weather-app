import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 11111111,
    icon: "stubIcon",
    description: "stubDescription",
    temperature: {
      min: 10,
      max: 99,
    },
  };
  it("renders and matches snapshot", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        icon={validProps.icon}
        description={validProps.description}
        temperature={validProps.temperature.max}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });
  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        icon={validProps.icon}
        description={validProps.description}
        temperature={validProps.temperature.max}
      />
    );
    expect(getByText("11111111")).toHaveClass("forecast-summary_date");
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary_icon");
    expect(getByText("stubDescription")).toHaveClass(
      "forecast-summary_description"
    );
    expect(getByText("99°C")).toHaveClass("forecast-summary_temperature");
  });
});
