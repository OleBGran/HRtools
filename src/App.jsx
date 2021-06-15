import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import report from "./HRreport"
import admin from "./HRadmin"

function App() {
  return (
    <Router>
      <img src={process.env.PUBLIC_URL + "/qualisoft.png"} width="100" alt="logo" />
      <h2>Qualisoft HR reports</h2>
      <Switch>
    {/* <Route path="/:id" component={admin} /> */}
        <Route exact path="/" component={report} />
      </Switch>
    </Router>
  );
}

export default App;
