import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = () => {
  return (
    <table className="table">
      <h2>Country</h2>
      <TableHead />
      <TableBody />
    </table>
  );
};
export default Table;
