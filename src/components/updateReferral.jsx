import React, { Component } from "react";
import ReferralTable from "./referralTable";
import { getAllReferral } from "./../services/populateRefService";

class UpdateReferral extends Component {
  state = { allReferral: [] };

  async componentDidMount() {
    const { data: allReferral } = await getAllReferral();
    this.setState({ allReferral });
  }
  render() {
    const referral = this.state.allReferral;

    return (
      <React-Fragment>
        <br></br>
        <ReferralTable referral={referral}></ReferralTable>
      </React-Fragment>
    );
  }
}

export default UpdateReferral;
