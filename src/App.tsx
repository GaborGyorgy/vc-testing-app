import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import withSessionProvider from "./hoc/withSessionProvider";
import { Bank, Home, Notary } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={withSessionProvider(Home)} />
        <Route path="/bank" component={Bank} />
        <Route path="/notary" component={Notary} />
        <Route render={() => <div>Page no found.</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
