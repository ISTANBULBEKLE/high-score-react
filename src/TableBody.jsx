import React from "react";
import allCountryScores from "./data/Scores";

const TableBody = () => {
  const data = allCountryScores[1];
  console.log(data);

  return (
    <tbody>
      {data.map((scores) => (
        <tr>
          {scores.n}: {scores.s}
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
