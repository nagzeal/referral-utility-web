import React, { Component } from "react";
import Table from "./common/table";

class ReferralTable extends Component {
  columns = [
    { path: "state", label: "State" },
    { path: "line", label: "Line" },
    { path: "company", label: "Company" },
    { path: "referralCode", label: "Referral Code" },
    { path: "reason", label: "Reason" }
  ];
  render() {
    const { referral } = this.props;
    return <Table columns={this.columns} data={referral} />;
  }
}

export default ReferralTable;
