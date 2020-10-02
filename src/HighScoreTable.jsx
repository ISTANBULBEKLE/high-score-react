import React from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "./data/Scores";

const HighScoreTable = () => {
  const data = allCountryScores;
  // console.log(data);
  const [countryName, countryScore] = data;

  console.log(countryName);
  // console.log(countryScore);

  return (
    <div>
      <table>
        <tr>
          {allCountryScores.map((country) => (
            <th>{country.name}</th>
             <tr><PlayerScore /><tr/>
          ))}
        </tr>
        <tr>
          <td>
           
          </td>
        </tr>
      </table>
    </div>
  );
};
export default HighScoreTable;
