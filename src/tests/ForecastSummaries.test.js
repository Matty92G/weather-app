import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
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
  ];
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
