import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import report from "./HRreport"

function App() {
  return (
    <Router>
      <Switch>
    {/* <Route path="/:id" component={RoomAdmin} /> */}
        <Route exact path="/" component={report} />
      </Switch>
    </Router>
  );
}

export default App;
