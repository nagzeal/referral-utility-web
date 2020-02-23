import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {}
  };

  handleReset = () => {
    this.doReset();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit();
  };

  handleSearch = () => {
    this.doSearch();
  };

  handleDelete = () => {
    this.doDelete();
  };

  handleUpdate = () => {
    this.doUpdate();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
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

  renderButton(label) {
    return (
      <button className="btn btn-primary m-4" onClick={this.handleSearch}>
        {label}
      </button>
    );
  }
  renderDelButton(label) {
    return <button className="btn btn-danger m-4 btn-sm">{label}</button>;
  }

  renderUpdateButton(label) {
    return <button className="btn btn-primary m-4 btn-sm">{label}</button>;
  }
}

export default Form;
