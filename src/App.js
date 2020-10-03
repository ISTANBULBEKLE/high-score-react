import React from "react";
import "./App.css";
import allCountryScores from "./data/allCountryScores";
import CountryTable from "./CountryTable";

function App() {
  return (
    <div className="App">
      <h1 className="country-name">High Scores per Countries</h1>
      {allCountryScores.map((country) => (
        <CountryTable
          countryName={country.name}
          countryScores={country.scores}
        />
      ))}
    </div>
  );
}

export default App;
