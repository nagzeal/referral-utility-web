import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class ReferralTable extends Component {
  columns = [
    {
      path: "referralCode",
      label: "Referral Code",
      content: referral => (
        <Link to={`/referral/${referral.id}`}>{referral.referralCode}</Link>
      )
    },
    { path: "state", label: "State" },
    { path: "line", label: "Line" },
    { path: "company", label: "Company" },

    { path: "referralReason", label: "Reason" },
    { path: "status", label: "Status" },
    {
      key: "delete",
      content: referral => (
        <button
          onClick={() => this.props.onDelete(referral)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { referral } = this.props;
    return <Table columns={this.columns} data={referral} />;
  }
}

export default ReferralTable;
