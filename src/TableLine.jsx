import React from "react";

const TableLine = ({ name, score }) => {
  return (
    <tr className="row">
      <td className="rowelement">{name} </td>
      <td className="rowelement">{score}</td>
    </tr>
  );
};

export default TableLine;
