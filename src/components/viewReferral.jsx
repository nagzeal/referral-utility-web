import React, { Component } from "react";
import ReferralTable from "./referralTable";
import { getAllReferral } from "../services/populateRefService";

class ViewReferral extends Component {
  state = {
    allReferral: []
  };

  async componentDidMount() {
    const { data: allReferral } = await getAllReferral();
    this.setState({ allReferral });
  }
  getPagedData = () => {
    const { allReferral: referral } = this.state;
    return { data: referral };
  };

  render() {
    const { data: referral } = this.getPagedData();
    return (
      <React.Fragment>
        <ReferralTable referral={referral}></ReferralTable>
      </React.Fragment>
    );
  }
}

export default ViewReferral;
