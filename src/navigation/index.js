import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Figure from "../components/Figure";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Navbar />
            <Route path="/figure/:id/:color" >
              <Figure  />
            </Route>
          </Route>

          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}
