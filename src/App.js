import React from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Table from "./components/Table";
import AddIssues from "./components/AddIssues";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Contact from "./components/Contact";


function App() {
  

  
  return (
    <div>
      <Router>
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addissues">
            <AddIssues />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
          <Route exact path="/view/:id">
            <Details />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
            <Route exact path="/table">

              <Table />

            </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
