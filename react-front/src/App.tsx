import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import History from "./components/history/history";

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/history" component={History} />
    </Switch>
  </BrowserRouter>
);
export default App;
