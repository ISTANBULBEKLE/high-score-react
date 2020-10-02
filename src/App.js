import React from "react";
import "./App.css";
import HighScoreTable from "./HighScoreTable";

const App = () => {
  return (
    <div className="App">
      <h1 className="country-name">High Scores per Countries</h1>
      <HighScoreTable />
    </div>
  );
};

export default App;
