import React from "react";

const Button = label => {
  return (
    <button
      type={label}
      className="btn btn-primary m-2"
      onClick={this.handleSubmit}
    >
      {label}
    </button>
  );
};
