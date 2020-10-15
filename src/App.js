import React from "react";
import "./App.css";
import allCountryScores from "./data/allCountryScores";
import CountryTable from "./CountryTable";

function App() {

  const orderedArr = allCountryScores.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );
  const numericSorted = orderedArr.sort((a, b) => a.scores.s < b.scores.s ? -1 : a.scores.s > b.scores.s ? 1 : 0 );

  return (
    <div className="App">
      <h1 className="country-name">High Scores per Countries</h1>
      {numericSorted.map((country) => (
        <CountryTable
          countryName={country.name}
          countryScores={country.scores}
        />
      ))}
    </div>
  );
}

export default App;
