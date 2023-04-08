import React from "react";
import { getByText, render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 11111111,
    icon: "800",
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
});
