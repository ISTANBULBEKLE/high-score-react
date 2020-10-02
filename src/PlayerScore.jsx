import React from "react";
import allCountryScores from "./data/Scores";

const PlayerScore = () => {

    
  return (
    <div>
      {allCountryScores.map(country=> (

          <tr>{}</tr>
      ))}
      <tr></tr>
      <h3>Player Score</h3>
    </div>
  );
};

export default PlayerScore;
