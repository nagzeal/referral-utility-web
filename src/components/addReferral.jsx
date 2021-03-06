import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import http from "./../services/referralService";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStatuses } from "../services/populateRefService";

class AddReferral extends Form {
  state = {
    statusAll: [],
    data: {
      state: "",
      line: "",
      company: "",
      referralCode: "",
      referralReason: "",
      status: ""
    },
    errors: {}
  };

  schema = {
    state: Joi.string()
      .required()
      .min(2)
      .max(2)
      .regex(/[A-Z]/)
      .label("State"),
    line: Joi.number()
      .required()
      .label("Line"),
    company: Joi.number()
      .required()
      .label("Company"),
    referralCode: Joi.string()
      .alphanum()
      .length(5)
      .label("Referral Code"),
    referralReason: Joi.string()
      .required()
      .label("Referral Reason"),
    status: Joi.string()
      .required()
      .label("Status")
  };

  componentDidMount() {
    const statuses = getStatuses();
    this.setState({ statusAll: statuses });
  }

  doSubmit = async () => {
    const { data } = this.state;
    await http.post("http://localhost:8080/referral-service/createRef", data);
    toast.success("Referral Added Successfully...");
  };

  doReset() {
    const emptyData = this.state.data;
    emptyData.state = "";
    emptyData.line = "";
    emptyData.company = "";
    emptyData.referralCode = "";
    emptyData.referralReason = "";
    this.setState({ data: emptyData });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <h1>Add New Referral</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("state", "State")}
          {this.renderInput("line", "Line")}
          {this.renderInput("company", "Company")}
          {this.renderInput("referralCode", "Referral Code")}
          {this.renderInput("referralReason", "Reason")}
          {this.renderSelect("status", "Status", this.state.statusAll)}
          {this.renderSubmitButton("Submit")}
          {this.renderResetButton("Reset")}
        </form>
      </React.Fragment>
    );
  }
}

export default AddReferral;
