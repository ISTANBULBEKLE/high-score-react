import React from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "./data/Scores";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const HighScoreTable = () => {
  const data = allCountryScores;

  console.log(data);

  return (
    <div>
      <table>
        <TableHead country={data.name} />
        <TableBody />
      </table>
    </div>
  );
};
export default HighScoreTable;
