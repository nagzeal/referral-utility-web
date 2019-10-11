import React from "react";
import Form from "./common/form";
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
    }
  };

  componentDidMount() {
    const statuses = getStatuses();
    this.setState({ statusAll: statuses });
  }

  doSubmit = async () => {
    const { data } = this.state;
    console.log(data);
    await http.post("http://localhost:8080/createRef", data);
    toast.success("Referral Added Successfully...");
  };

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
