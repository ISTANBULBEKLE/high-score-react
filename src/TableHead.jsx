import React from "react";
import allCountryScores from "./data/Scores";

const TableHead = () => {
  const data = allCountryScores.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));

  return (
    <thead>
      <tr>
        {data.map((country) => (
          <th>High Score:{country.name}</th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;
