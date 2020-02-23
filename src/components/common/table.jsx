import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import ReactDataGrid from "react-data-grid";

const Table = ({ columns, data }) => {
  return (
    <table className="table table-striped">
      <TableHeader columns={columns}></TableHeader>
      <TableBody columns={columns} data={data} />
    </table>

    // <ReactDataGrid
    //   columns={columns}
    //   rowGetter={i => data[i]}
    //   rowsCount={10}
    //   minHeight={500}
    // />
  );
};

export default Table;
