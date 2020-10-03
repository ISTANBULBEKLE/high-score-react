import React from "react";

const TableLine = ({ name, score }) => {
  return (
    <tr className="row">
      <td className="row-element">{name} </td>
      <td className="row-element">{score}</td>
    </tr>
  );
};

export default TableLine;
