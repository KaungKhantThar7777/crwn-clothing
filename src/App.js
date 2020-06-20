import React from "react";
import HomePage from "./pages/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function Hat() {
  return <div>Hats</div>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
