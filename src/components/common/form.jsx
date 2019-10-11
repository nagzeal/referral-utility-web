import React, { Component } from "react";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {}
  };

  handleReset = () => {
    const { data } = this.state;
    this.setState({ data });
    console.log("Reset called...");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit Called");
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    console.log("Inside Handle Change");
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderInput = (name, label, type = "text") => {
    const { data } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
      />
    );
  };

  renderSubmitButton = label => {
    return (
      <button
        type={label}
        className="btn btn-primary m-3"
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
  };

  renderResetButton = label => {
    return (
      <button
        type={label}
        className="btn btn-primary"
        onClick={this.handleReset}
      >
        {label}
      </button>
    );
  };
}

export default Form;
