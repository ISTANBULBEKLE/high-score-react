import React from "react";
import "./App.css";
import allCountryScores from "./data/allCountryScores";
import CountryTable from "./CountryTable";
import ToggleTheList from './ToggleTheList';

function App() {

  
  const orderedArr = allCountryScores.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0 );
  // const numericSorted = orderedArr.sort((a, b) => a.scores.s - b.scores.s );

  return (
    <div className="App">
   <ToggleTheList />
      <h1 className="country-name">High Scores per Countries</h1>
      {orderedArr.map((country) => (
        <CountryTable
          countryName={country.name}
          countryScores={country.scores}
        />
      ))}
    </div>
  );
}

export default App;
