import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
  };
  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };
  render() {
    const { columns, data } = this.props;
    console.log("Inside Table Body", data);
    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
