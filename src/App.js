import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import AddReferral from "./components/addReferral";
import ViewReferral from "./components/viewReferral";
import UpdateReferral from "./components/updateReferral";
import RemoveReferral from "./components/removeReferral";
import AuditTrail from "./components/auditTrail";

function App() {
  return (
    <React.Fragment>
      <NavBar color="dark" />
      <main className="container">
        <Switch>
          <Route path="/addRef" component={AddReferral}></Route>
          <Route path="/viewRef" component={ViewReferral}></Route>
          <Route path="/updateRef" component={UpdateReferral}></Route>
          <Route path="/delRef" component={RemoveReferral}></Route>
          <Route path="/audit" component={AuditTrail}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
