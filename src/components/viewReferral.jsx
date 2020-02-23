import React from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import http from "./../services/referralService";
import { getAllReferral } from "../services/populateRefService";
import ReferralTable from "./referralTable";
import Form from "./common/form";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import SearchBox from "./common/searchBox";

class ViewReferral extends Form {
  state = {
    allReferral: [],
    allStates: [],
    allLines: [],
    allCompany: [],
    allReferralCd: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    data: {
      states: "",
      line: "",
      company: "",
      referralCd: ""
    }
  };

  async componentDidMount() {
    const { data: allReferral } = await getAllReferral();
    this.setState({ allReferral });
  }

  handleSearch = query => {
    console.log("Search Called...");
  };

  doDelete = async referral => {
    const originalReferral = this.state.allReferral;
    const myReferral = originalReferral.filter(r => r.id !== referral.id);
    console.log("Headers", this.state.headers);
    try {
      http.delete(
        "http://localhost:8080/referral-service/deleteReferral/" + referral.id
      );
      this.setState({ allReferral: myReferral });
      toast.success("Referral Deleted Successfully...");
    } catch (ex) {
      if (ex.response.status === 403) toast.error("There is a problem");
    }
  };

  doUpdate = async referral => {
    console.log("Update", referral);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const totalCount = this.state.allReferral.length;
    const { pageSize, currentPage, searchQuery } = this.state;
    const referral = paginate(this.state.allReferral, currentPage, pageSize);
    return (
      <React.Fragment>
        <ToastContainer />
        <br></br>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <ReferralTable
          referral={referral}
          onDelete={this.doDelete}
          onUpdate={this.doUpdate}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default ViewReferral;
