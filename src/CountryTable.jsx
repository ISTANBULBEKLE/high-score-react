import React from "react";
import CountryHeader from "./CountryHeader";
import TableLine from "./TableLine";

const CountryTable = ({ countryName, countryScores }) => {
  return (
    <div className="country-container" key={countryName}>
      <CountryHeader countryName={countryName} />
      <table>
        {countryScores.map((score) => (
          <TableLine name={score.n} score={score.s} />
        ))}
      </table>
    </div>
  );
};

export default CountryTable;
