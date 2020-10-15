import React from "react";
import CountryHeader from "./CountryHeader";
import TableLine from "./TableLine";

const CountryTable = ({ countryName, countryScores, }) => {

const countryScoreArr = countryScores.sort((a,b)=> a.s-b.s)

  return (
    <div className="country-container" key={countryName}>
      <CountryHeader countryName={countryName} />
      <table>
        {countryScoreArr.map((score) => (
          <TableLine name={score.n} score={score.s} />
        ))}
      </table>
    </div>
  );
};

export default CountryTable;
