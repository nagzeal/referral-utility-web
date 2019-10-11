import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, data }) => {
  return (
    <table className="table table-striped">
      <TableHeader columns={columns}></TableHeader>
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
