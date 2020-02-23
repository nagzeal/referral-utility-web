import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import AddReferral from "./components/addReferral";
import ViewReferral from "./components/viewReferral";
import UpdateReferral from "./components/updateReferral";
import AuditTrail from "./components/auditTrail";
import ReferralForm from "./components/referralForm";

function App() {
  return (
    <React.Fragment>
      <NavBar color="dark" />
      <main className="container">
        <Switch>
          <Route path="/addRef" component={AddReferral}></Route>
          <Route path="/viewRef" component={ViewReferral}></Route>
          <Route path="/updateRef" component={UpdateReferral}></Route>
          <Route path="/audit" component={AuditTrail}></Route>
          <Route path="/referral/:id" component={ReferralForm}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
