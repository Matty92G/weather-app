import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 11111111,
        icon: "stubIcon1",
        description: "stubDescription1",
        temperature: {
          min: 10,
          max: 91,
        },
      },
      {
        date: 22222222,
        icon: "stubIcon2",
        description: "stubDescription2",
        temperature: {
          min: 20,
          max: 92,
        },
      },
    ],
    onForecastSelect: () => {},
  };
  it("renders and matches snapshot", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps.forecasts} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
