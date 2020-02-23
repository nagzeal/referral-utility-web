import React from "react";
import { getStatuses } from "../services/populateRefService";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "./../services/referralService";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

class ReferralForm extends Form {
  state = {
    data: {
      state: "",
      line: "",
      company: "",
      referralCode: "",
      referralReason: "",
      status: [
        { _id: "Select", name: "Select" },
        { _id: "OFF", name: "Off" },
        { _id: "ON", name: "On" }
      ]
    },
    errors: {},
    allStatus: []
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
    this.populateStatus();
    this.populateReferral();
  }

  mapToViewModel(referral) {
    return {
      id: referral.id,
      state: referral.state,
      line: referral.line,
      company: referral.company,
      referralCode: referral.referralCode,
      referralReason: referral.referralReason,
      status: this.state.status
    };
  }

  populateStatus() {
    const allStatus = getStatuses();
    this.setState({ allStatus });
  }

  doSubmit = async () => {
    const { data } = this.state;
    await http.post("http://localhost:8080/referral-service/createRef", data);
    toast.info("Referral Updated...");
  };

  async populateReferral() {
    const refId = this.props.match.params.id;
    const { data: myReferral } = await http.get(
      "http://localhost:8080/referral-service/fetchReferral/" + refId
    );
    this.setState({ data: this.mapToViewModel(myReferral) });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <h3>Update Referral Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("state", "State")}
          {this.renderInput("line", "Line")}
          {this.renderInput("company", "Company")}
          {this.renderInput("referralCode", "Referral Code")}
          {this.renderInput("referralReason", "Reason")}
          {this.renderSelect("status", "Status", this.state.allStatus)}
          {this.renderSubmitButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default ReferralForm;
