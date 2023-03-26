// import logo from "./logo.svg";
import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";

// function App(props) {
//   return (
//     <div className="App">
//       <LocationDetails
//         city={props.location.city}
//         country={props.location.country}
//       />
//     </div>
//   );
// }

// function App(props) {
//   const { location } = props;
//   return (
//     <div className="App">
//       <LocationDetails city={location.city} country={location.country} />
//     </div>
//   );
// }

function App({ location }) {
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
}

export default App;
