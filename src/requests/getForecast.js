import axios from "axios";

const getForecast = (
  // searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  // if (!searchText) {
  //   endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  // } else {
  //   endpoint += `?city=${searchText.String}`;
  // }
  return axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  });
};

export default getForecast;
